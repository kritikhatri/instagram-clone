import React from 'react';
import { useData } from '../context/DataContext';
import StoryTray from '../components/Story/StoryTray';
import PostCard from '../components/Feed/PostCard';

export default function Home() {
  const { posts } = useData();

  return (
    <div className="feed-container">
      <StoryTray />
      <div className="feed">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
