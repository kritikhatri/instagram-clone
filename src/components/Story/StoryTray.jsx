import React from 'react';
import { useData } from '../../context/DataContext';

export default function StoryTray() {
  const { stories, markStorySeen } = useData();

  return (
    <div className="story-tray">
      <div className="story-item">
        <div className="story-avatar-container">
          <img src="https://i.pravatar.cc/150?img=12" alt="Your Story" className="story-avatar" />
        </div>
        <span className="story-username">Your story</span>
      </div>
      
      {stories.map(story => (
        <div key={story.id} className="story-item" onClick={() => markStorySeen(story.id)}>
          <div className={`story-avatar-container ${story.seen ? 'seen' : ''}`}>
            <img src={story.userImage} alt={story.username} className="story-avatar" />
          </div>
          <span className="story-username">{story.username}</span>
        </div>
      ))}
    </div>
  );
}
