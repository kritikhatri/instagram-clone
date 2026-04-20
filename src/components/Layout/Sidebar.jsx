import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Compass, PlaySquare, Heart, PlusSquare, Search, Menu } from 'lucide-react';
import { useData } from '../../context/DataContext';

export default function Sidebar() {
  const { currentUser } = useData();

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h2>Instagram</h2>
      </div>
      <div className="sidebar-links">
        <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
          <Home size={28} strokeWidth={1.5} />
          <span>Home</span>
        </NavLink>
        <div className="nav-link">
          <Search size={28} strokeWidth={1.5} />
          <span>Search</span>
        </div>
        <NavLink to="/explore" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
          <Compass size={28} strokeWidth={1.5} />
          <span>Explore</span>
        </NavLink>
        <NavLink to="/reels" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
          <PlaySquare size={28} strokeWidth={1.5} />
          <span>Reels</span>
        </NavLink>
        <div className="nav-link">
          <Heart size={28} strokeWidth={1.5} />
          <span>Notifications</span>
        </div>
        <div className="nav-link">
          <PlusSquare size={28} strokeWidth={1.5} />
          <span>Create</span>
        </div>
        <NavLink to="/profile" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
          <img src={currentUser.avatar} alt="Profile" className="nav-profile-pic" />
          <span>Profile</span>
        </NavLink>
      </div>
      <div className="sidebar-bottom">
        <div className="nav-link">
          <Menu size={28} strokeWidth={1.5} />
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
