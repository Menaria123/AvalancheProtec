import React from 'react';
import './navbar.css'; // Import the CSS file for styling
import Weather from './Weather.js';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="img">
          <img src='./_logo.jpg' alt="avalancheprotec" />
        </div>
        <div className="Options">
          <div className='o' > ABOUT </div>
          <div className='o'> CONTACT US </div>
          <div className='o' id="db"> DASHBOARD </div>
          <div className='o'> HELP </div>
          <div className='o'> Emergency no. </div>
          <div className='o' id="w"> <Weather /></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
