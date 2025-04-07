/*
  # Add badge field to profiles and set pro badge for specific user

  1. Changes
    - Add badge field to profiles table
    - Set pro badge for c.batuemi@gmail.com

  2. Security
    - Maintain existing RLS policies
*/

-- Add badge column to profiles
ALTER TABLE profiles
ADD COLUMN IF NOT EXISTS badge text CHECK (badge IN ('novice', 'confirmé', 'pro'));

-- Set pro badge for specific user
UPDATE profiles 
SET badge = 'pro'
WHERE id IN (
  SELECT id 
  FROM auth.users 
  WHERE email = 'c.batuemi@gmail.com'
);