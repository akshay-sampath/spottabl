import React from 'react'
import './style.css';

const Header = () => {
  return (
        <div className="navbar">
           <div className="logo">
             <img src="/images/logo.jfif" alt="" />
           </div>
           <div className="title-txt">
             <span>YOUR SPOTTABL TEAM</span>
             <span>Spottabl supports you all throughout</span>
           </div>
      </div>
  );
};


export default Header;