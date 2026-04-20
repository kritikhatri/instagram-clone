import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { initialPosts, initialUser, initialStories } from '../data/mockDb';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [currentUser, setCurrentUser] = useLocalStorage('ig_user', initialUser);
  const [posts, setPosts] = useLocalStorage('ig_posts', initialPosts);
  const [stories, setStories] = useLocalStorage('ig_stories', initialStories);
  const [savedPostIds, setSavedPostIds] = useLocalStorage('ig_saved', []);
  const [likedPostsData, setLikedPostsData] = useLocalStorage('ig_liked', {});

  // Simulate liking a post
  const toggleLike = (postId) => {
    setLikedPostsData((prev) => {
      const isCurrentlyLiked = !!prev[postId];
      return { ...prev, [postId]: !isCurrentlyLiked };
    });
    
    // Also update post count just for UI display (in real life backend handles this)
    setPosts(prevPosts => prevPosts.map(p => {
      if (p.id === postId) {
        return {
          ...p,
          likes: likedPostsData[postId] ? p.likes - 1 : p.likes + 1
        };
      }
      return p;
    }));
  };

  // Simulate saving a post
  const toggleSave = (postId) => {
    setSavedPostIds((prev) => {
      if (prev.includes(postId)) {
        return prev.filter(id => id !== postId);
      } else {
        return [...prev, postId];
      }
    });
  };

  // Add Comment
  const addComment = (postId, text) => {
    setPosts(prevPosts => prevPosts.map(p => {
      if (p.id === postId) {
        return {
          ...p,
          comments: [...p.comments, { id: Date.now().toString(), username: currentUser.username, text }]
        };
      }
      return p;
    }));
  };

  // Mark Story Seen
  const markStorySeen = (storyId) => {
    setStories(prev => prev.map(s => s.id === storyId ? { ...s, seen: true } : s));
  };
  
  // Update Profile
  const updateProfile = (newData) => {
    setCurrentUser(prev => ({ ...prev, ...newData }));
  };

  return (
    <DataContext.Provider value={{
      currentUser,
      updateProfile,
      posts,
      stories,
      markStorySeen,
      savedPostIds,
      likedPostsData,
      toggleLike,
      toggleSave,
      addComment
    }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
