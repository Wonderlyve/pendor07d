import React, { createContext, useContext, useState, useCallback } from 'react';
import { supabase } from '../lib/supabase';

interface Post {
  id: string;
  content: string;
  image_url: string | null;
  odds: number;
  confidence: number;
  created_at: string;
  likes: number;
  comments: number;
  shares: number;
  user: {
    username: string;
    avatar_url: string;
    badge?: 'novice' | 'confirmé' | 'pro';
  };
  user_id?: string;
}

interface PostContextType {
  posts: Post[];
  loading: boolean;
  hasMore: boolean;
  addPost: (post: { text: string; image: string | null; totalOdds: string; confidence: number }) => Promise<void>;
  updatePost: (postId: string, content: string) => Promise<void>;
  deletePost: (postId: string) => Promise<void>;
  fetchMorePosts: () => Promise<void>;
}

const PostContext = createContext<PostContextType | undefined>(undefined);

const POSTS_PER_PAGE = 5;
const MAX_RETRIES = 3;
const INITIAL_RETRY_DELAY = 1000;

export function PostProvider({ children }: { children: React.ReactNode }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  const fetchMorePosts = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('posts')
        .select(`
          id,
          content,
          image_url,
          odds,
          confidence,
          created_at,
          likes,
          comments,
          shares,
          user_id,
          user:profiles(username, avatar_url, badge)
        `)
        .range(page * POSTS_PER_PAGE, (page + 1) * POSTS_PER_PAGE - 1)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      if (data) {
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const uniquePosts = data.filter(
          newPost => !posts.some(existingPost => existingPost.id === newPost.id)
        );
        
        setPosts(prev => [...prev, ...uniquePosts]);
        setHasMore(data.length === POSTS_PER_PAGE);
        setPage(prev => prev + 1);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  }, [page, loading, hasMore, posts]);

  const retryOperation = async (operation: () => Promise<any>, retries = MAX_RETRIES, delay = INITIAL_RETRY_DELAY) => {
    try {
      return await operation();
    } catch (error) {
      if (retries > 0 && error instanceof Error && 
          (error.message.includes('timeout') || error.message.includes('canceling statement'))) {
        await new Promise(resolve => setTimeout(resolve, delay));
        return retryOperation(operation, retries - 1, delay * 2);
      }
      throw error;
    }
  };

  const addPost = async (newPost: { text: string; image: string | null; totalOdds: string; confidence: number }) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('User not authenticated');

      const odds = parseFloat(newPost.totalOdds.replace(',', '.'));
      
      if (isNaN(odds)) {
        throw new Error('Invalid odds value');
      }

      const postData = {
        content: newPost.text,
        image_url: newPost.image,
        odds: odds,
        confidence: newPost.confidence,
        user_id: user.id,
        likes: 0,
        comments: 0,
        shares: 0
      };

      const { data, error } = await retryOperation(async () => {
        return await supabase
          .from('posts')
          .insert([postData])
          .select(`
            id,
            content,
            image_url,
            odds,
            confidence,
            created_at,
            likes,
            comments,
            shares,
            user_id,
            user:profiles(username, avatar_url, badge)
          `)
          .single();
      });

      if (error) throw error;

      if (data) {
        setPosts(prev => [data, ...prev]);
      }
    } catch (error) {
      console.error('Error adding post:', error);
      if (error instanceof Error && 
          (error.message.includes('timeout') || error.message.includes('canceling statement'))) {
        throw new Error('The operation timed out. Please try again.');
      }
      throw error;
    }
  };

  const updatePost = async (postId: string, content: string) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('User not authenticated');

      const { data, error } = await retryOperation(async () => {
        return await supabase
          .from('posts')
          .update({ content })
          .eq('id', postId)
          .eq('user_id', user.id)
          .select()
          .single();
      });

      if (error) throw error;

      if (data) {
        setPosts(prev => prev.map(post => 
          post.id === postId ? { ...post, content } : post
        ));
      }
    } catch (error) {
      console.error('Error updating post:', error);
      throw error;
    }
  };

  const deletePost = async (postId: string) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('User not authenticated');

      const { error } = await retryOperation(async () => {
        return await supabase
          .from('posts')
          .delete()
          .eq('id', postId)
          .eq('user_id', user.id);
      });

      if (error) throw error;

      setPosts(prev => prev.filter(post => post.id !== postId));
    } catch (error) {
      console.error('Error deleting post:', error);
      throw error;
    }
  };

  return (
    <PostContext.Provider value={{ posts, loading, hasMore, addPost, updatePost, deletePost, fetchMorePosts }}>
      {children}
    </PostContext.Provider>
  );
}

export function usePosts() {
  const context = useContext(PostContext);
  if (context === undefined) {
    throw new Error('usePosts must be used within a PostProvider');
  }
  return context;
}