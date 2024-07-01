import React from 'react';
import './App.css'; // Import the CSS file for styling
import Weather from './Weather.js';
import logo from './_logo.jpg'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="img">
            <img src={logo} alt="avalancheprotec" />
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
      <div className="urgent-news-container">
        <div className="urgent-news">
          <h2>URGENT UPDATES</h2>
        </div>
        <div className="marquee-container">
          <div className="marquee">
            High Avalanche Risk in Colorado's Rocky Mountains!Recent heavy snowfall increases danger in back country terrain.Experts
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;