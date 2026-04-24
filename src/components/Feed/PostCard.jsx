import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Smile } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useData } from '../../context/DataContext';

export default function PostCard({ post }) {
  const { toggleLike, toggleSave, addComment, likedPostsData, savedPostIds } = useData();
  const [commentText, setCommentText] = useState('');
  const [showBigHeart, setShowBigHeart] = useState(false);

  const isLiked = likedPostsData[post.id];
  const isSaved = savedPostIds.includes(post.id);

  const handleDoubleTap = () => {
    if (!isLiked) toggleLike(post.id);
    setShowBigHeart(true);
    setTimeout(() => setShowBigHeart(false), 800);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      addComment(post.id, commentText);
      setCommentText('');
    }
  };

  return (
    <div className="post-card">
      <div className="post-header">
        <img src={post.user.userImage} alt={post.user.username} className="post-header-avatar" />
        <div className="post-header-info">
          <span className="post-header-username">{post.user.username}</span>
          <span className="post-header-time">• {post.time}</span>
        </div>
        <MoreHorizontal size={20} className="action-icon" />
      </div>

      <div className="post-image-container" onDoubleClick={handleDoubleTap}>
        <img src={post.image} alt="Post" className="post-image" loading="lazy" />
        
        <AnimatePresence>
          {showBigHeart && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1.2 }}
              exit={{ opacity: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="big-heart"
            >
              <Heart size={100} fill="white" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="post-actions">
        <div className="post-actions-left">
          <motion.div
              whileTap={{ scale: 0.7 }}
              animate={{ scale: isLiked ? [1, 1.4, 1] : 1 }}
              transition={{ duration: 0.3 }}
            >
              <Heart
                size={26}
                strokeWidth={1.5}
                fill={isLiked ? "red" : "none"}
                color={isLiked ? "red" : "currentColor"}
                className="action-icon"
                onClick={() => toggleLike(post.id)}
              />
            </motion.div>
          <MessageCircle size={26} strokeWidth={1.5} className="action-icon" />
          <Send size={26} strokeWidth={1.5} className="action-icon" />
        </div>
        <motion.div whileTap={{ scale: 0.8 }}>
          <Bookmark
            size={26}
            strokeWidth={1.5}
            fill={isSaved ? 'currentColor' : 'none'}
            className="action-icon"
            onClick={() => toggleSave(post.id)}
          />
        </motion.div>
      </div>

      <div className="post-likes">
        {isLiked ? (
          <>
            Liked by <strong>you</strong> and{" "}
            {(post.likes).toLocaleString()} others
          </>
        ) : (
          <>{post.likes.toLocaleString()} likes</>
        )}
      </div>

      <div className="post-caption">
        <span className="post-caption-username">{post.user.username}</span>
        {post.caption}
      </div>

      {post.comments && post.comments.length > 0 && (
        <div className="post-comments-view">
          View all {post.comments.length} comments
        </div>
      )}

      {post.comments && post.comments.map(c => (
        <div key={c.id} className="post-caption">
          <span className="post-caption-username">{c.username}</span>
          {c.text}
        </div>
      ))}

      <form className="post-add-comment" onSubmit={handleCommentSubmit}>
        <Smile size={24} strokeWidth={1.5} style={{ marginRight: '14px', color: 'var(--ig-text-secondary)' }} />
        <input
          type="text"
          placeholder="Add a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button type="submit" disabled={!commentText.trim()}>Post</button>
      </form>
    </div>
  );
}
