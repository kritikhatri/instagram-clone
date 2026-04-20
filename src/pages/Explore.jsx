import React from 'react';
import { motion } from 'framer-motion';

// Mock explore data since we don't have enough posts in mockDb
const IMAGES = Array.from({ length: 15 }, (_, i) => `https://picsum.photos/seed/${i + 10}/500/500`);

export default function Explore() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="explore-grid"
    >
      {IMAGES.map((img, idx) => (
        <motion.div 
          key={idx} 
          className="explore-item"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.05 }}
        >
          <img src={img} alt={`Explore ${idx}`} loading="lazy" />
          <div className="explore-item-overlay">
            <span>❤️ {Math.floor(Math.random() * 500) + 10}</span>
            <span>💬 {Math.floor(Math.random() * 50) + 1}</span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
