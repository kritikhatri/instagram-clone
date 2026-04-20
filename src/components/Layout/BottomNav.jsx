import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Compass, PlaySquare, PlusSquare } from 'lucide-react';
import { useData } from '../../context/DataContext';

export default function BottomNav() {
  const { currentUser } = useData();

  return (
    <div className="bottom-nav">
      <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
        <Home size={26} strokeWidth={1.5} />
      </NavLink>
      <NavLink to="/explore" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
        <Compass size={26} strokeWidth={1.5} />
      </NavLink>
      <div className="nav-link">
        <PlusSquare size={26} strokeWidth={1.5} />
      </div>
      <NavLink to="/reels" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
        <PlaySquare size={26} strokeWidth={1.5} />
      </NavLink>
      <NavLink to="/profile" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
        <img src={currentUser.avatar} alt="Profile" className="nav-profile-pic" />
      </NavLink>
    </div>
  );
}
