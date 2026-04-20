import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { motion } from 'framer-motion';

export default function Profile() {
  const { currentUser, posts, savedPostIds } = useData();
  const [activeTab, setActiveTab] = useState('posts');
  
  // A profile should show posts made by the current user. 
  // In our mockDb, currentUser is antigravity_dev, but there aren't posts by them initially. Let's show all for demo, or mock it.
  const myPosts = posts.filter(p => p.user.username === currentUser.username);
  
  // For saved, we can look up by saved ids
  const savedPosts = posts.filter(p => savedPostIds.includes(p.id));

  const displayPosts = activeTab === 'posts' ? myPosts : savedPosts;

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="profile-container"
    >
      <div className="profile-header">
        <img src={currentUser.avatar} alt="Profile Avatar" className="profile-avatar" />
        <div className="profile-info">
          <div className="profile-info-top">
            <h1 className="profile-username">{currentUser.username}</h1>
            <button className="profile-edit-btn">Edit Profile</button>
            <button className="profile-edit-btn">View archive</button>
          </div>
          <div className="profile-stats">
            <span><b>{currentUser.posts}</b> posts</span>
            <span><b>{currentUser.followers.toLocaleString()}</b> followers</span>
            <span><b>{currentUser.following.toLocaleString()}</b> following</span>
          </div>
          <div className="profile-bio">
            <div className="profile-bio-name">{currentUser.fullName}</div>
            {currentUser.bio}
          </div>
        </div>
      </div>

      <div className="profile-tabs">
        <div 
          className={`profile-tab ${activeTab === 'posts' ? 'active' : ''}`}
          onClick={() => setActiveTab('posts')}
        >
          POSTS
        </div>
        <div 
          className={`profile-tab ${activeTab === 'saved' ? 'active' : ''}`}
          onClick={() => setActiveTab('saved')}
        >
          SAVED
        </div>
        <div 
          className="profile-tab"
        >
          TAGGED
        </div>
      </div>

      <div className="explore-grid">
        {displayPosts.length > 0 ? (
          displayPosts.map(p => (
            <div key={p.id} className="explore-item">
              <img src={p.image} alt={p.caption} />
              <div className="explore-item-overlay">
                <span>❤️ {p.likes}</span>
                <span>💬 {p.comments ? p.comments.length : 0}</span>
              </div>
            </div>
          ))
        ) : (
          <div style={{ padding: '40px', textAlign: 'center', gridColumn: 'span 3', color: 'var(--ig-text-secondary)' }}>
            No posts found.
          </div>
        )}
      </div>
    </motion.div>
  );
}
