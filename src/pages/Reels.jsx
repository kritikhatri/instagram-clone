import React from 'react';
import { motion } from 'framer-motion';

export default function Reels() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="feed-container"
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', justifyContent: 'center'}}
    >
      <div style={{
        width: '350px',
        height: '600px',
        backgroundColor: '#1a1a1a',
        borderRadius: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Placeholder for reel video */}
        <div style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
          <h4>@antigravity_dev</h4>
          <p>Reels are coming soon! 🚀</p>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&h=900&fit=crop" 
          alt="Reel Placeholder" 
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
        />
      </div>
    </motion.div>
  );
}
