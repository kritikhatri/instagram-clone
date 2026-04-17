import React, { useState } from "react";
import {
  Home,
  MessageCircle,
  PlusSquare,
  Heart,
  User,
  Send,
  Bookmark,
  MoreHorizontal,
  Smile
} from "lucide-react";
import "./App.css";

const postsData = [
  {
    id: 1,
    username: "john_doe",
    location: "San Francisco, California",
    userImage: "https://i.pravatar.cc/150?u=1",
    image: "https://picsum.photos/500/500?random=1",
    caption: "Beautiful day exploring the city! ✨",
    likes: 124,
    comments: 12,
    time: "2 HOURS AGO"
  },
  {
    id: 2,
    username: "jane_smith",
    location: "Tokyo, Japan",
    userImage: "https://i.pravatar.cc/150?u=2",
    image: "https://picsum.photos/500/500?random=2",
    caption: "Neon lights and late nights. Loving this view 😍",
    likes: 89,
    comments: 5,
    time: "4 HOURS AGO"
  }
];

export default function App() {
  const [posts, setPosts] = useState(postsData);
  const [liked, setLiked] = useState({});

  const toggleLike = (id) => {
    setLiked({ ...liked, [id]: !liked[id] });
  };

  return (
    <div className="app">
      { }
      <div className="navbar">
        <div className="navbar-content">
          <h2 className="logo">Instagram</h2>
          <div className="nav-icons">
            <Home size={24} strokeWidth={1.5} fill="currentColor" />
            <MessageCircle size={24} strokeWidth={1.5} />
            <PlusSquare size={24} strokeWidth={1.5} />
            <Heart size={24} strokeWidth={1.5} />
            <User size={24} strokeWidth={1.5} />
          </div>
        </div>
      </div>

      { }
      <div className="feed">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            { }
            <div className="post-header">
              <div className="post-header-avatar">
                <img src={post.userImage} alt={post.username} />
              </div>
              <div className="post-header-info">
                <span className="post-header-username">{post.username}</span>
                <span className="post-header-location">{post.location}</span>
              </div>
              <MoreHorizontal size={20} className="post-header-more" />
            </div>

            { }
            <img src={post.image} alt="post" className="post-image" />

            { }
            <div className="post-actions">
              <div className="post-actions-left">
                <Heart
                  size={24}
                  strokeWidth={1.5}
                  className={`action-icon ${liked[post.id] ? "liked" : ""}`}
                  onClick={() => toggleLike(post.id)}
                />
                <MessageCircle size={24} strokeWidth={1.5} className="action-icon" />
                <Send size={24} strokeWidth={1.5} className="action-icon" />
              </div>
              <Bookmark size={24} strokeWidth={1.5} className="action-icon" />
            </div>

            { }
            <div className="post-likes">
              {liked[post.id] ? (post.likes + 1).toLocaleString() : post.likes.toLocaleString()} likes
            </div>

            { }
            <div className="post-caption">
              <span className="post-caption-username">{post.username}</span>
              {post.caption}
            </div>

            { }
            <div className="post-comments-view">
              View all {post.comments} comments
            </div>

            { }
            <div className="post-time">
              {post.time}
            </div>

            { }
            <div className="post-add-comment">
              <Smile size={24} strokeWidth={1.5} style={{ marginRight: '14px', color: '#262626' }} />
              <input type="text" placeholder="Add a comment..." />
              <button>Post</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
