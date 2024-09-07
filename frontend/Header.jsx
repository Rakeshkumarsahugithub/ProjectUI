import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">MyApp</div>
      <div className="profile">
        <img src="https://via.placeholder.com/40" alt="Profile" />
        <span>User</span>
      </div>
    </div>
  );
};

export default Header;
