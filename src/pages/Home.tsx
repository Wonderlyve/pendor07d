import React, { useEffect, useRef, useCallback, Suspense } from 'react';
import { Link } from 'react-router-dom';
import AdBanner from '../components/AdBanner';
import EnergyDrinkAd from '../components/EnergyDrinkAd';
import Bet from '../components/Bet';
import Post from '../components/Post';
import PostSkeleton from '../components/PostSkeleton';
import { usePosts } from '../context/PostContext';
import CreatePredictionButton from '../components/CreatePredictionButton';

export default function Home() {
  const [selectedMatch, setSelectedMatch] = React.useState<any>(null);
  const [isBetModalOpen, setIsBetModalOpen] = React.useState(false);
  const { posts, loading, hasMore, fetchMorePosts } = usePosts();
  const observer = useRef<IntersectionObserver>();

  const lastPostElementRef = useCallback((node: HTMLDivElement | null) => {
    if (loading) return;
    
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        fetchMorePosts();
      }
    });
    
    if (node) observer.current.observe(node);
  }, [loading, hasMore, fetchMorePosts]);

  useEffect(() => {
    fetchMorePosts();

    // Check for shared prediction in URL hash
    const hash = window.location.hash;
    if (hash && hash.startsWith('#post-')) {
      const postId = hash.replace('#post-', '');
      const sharedPost = posts.find(post => post.id === postId);
      if (sharedPost) {
        setSelectedMatch(sharedPost);
        setIsBetModalOpen(true);
      }
    }
  }, []);

  const handleOpenBetModal = (match: any) => {
    window.history.replaceState(null, '', `#post-${match.id}`);
    setSelectedMatch(match);
    setIsBetModalOpen(true);
  };

  const handleCloseBetModal = () => {
    window.history.replaceState(null, '', window.location.pathname);
    setIsBetModalOpen(false);
  };

  const handlePostDeleted = () => {
    // Refresh posts after deletion
    fetchMorePosts();
  };

  const skeletons = Array(3).fill(null);

  return (
    <div className="space-y-6">
      <div className="space-y-6">
        {loading && posts.length === 0 && (
          <div className="space-y-6">
            {skeletons.map((_, index) => (
              <PostSkeleton key={index} />
            ))}
          </div>
        )}

        {posts.map((post, index) => {
          if (posts.length === index + 1) {
            return (
              <div ref={lastPostElementRef} key={post.id}>
                <Post 
                  post={post}
                  onOpenBetModal={handleOpenBetModal}
                  onPostDeleted={handlePostDeleted}
                />
              </div>
            );
          } else {
            return (
              <Post 
                key={post.id} 
                post={post}
                onOpenBetModal={handleOpenBetModal}
                onPostDeleted={handlePostDeleted}
              />
            );
          }
        })}
        
        {loading && posts.length > 0 && (
          <PostSkeleton />
        )}
        
        {!loading && !hasMore && posts.length > 0 && (
          <p className="text-center text-gray-500">Plus aucun pronostic à afficher</p>
        )}

        {!loading && posts.length === 0 && (
          <div className="text-center text-gray-500">
            <p>Aucun pronostic disponible pour le moment</p>
          </div>
        )}
      </div>

      <EnergyDrinkAd className="w-full" />

      <CreatePredictionButton />

      {selectedMatch && (
        <Bet
          isOpen={isBetModalOpen}
          onClose={handleCloseBetModal}
          prediction={selectedMatch}
        />
      )}
    </div>
  );
}