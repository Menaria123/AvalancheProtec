import React, { useState } from 'react';
import './Landing_page.css';

// Main App component
function Landing_page() {
  return (
  <div className='Landing_page'>
    <div className='header'>
      <h1>AVALANCHE WARNING SYSTEM</h1>
    </div>
    <div className='passage'>
      <p>Our system serves as an early warning mechanism for detecting potential avalanches in mountainous areas. It employs a combination of sensors, server analysis, and machine learning algorithms to predict avalanches and issue alerts to people in those areas.</p>
    </div>
    <div className='button'>
    <button class="avalanche-zone-map">Avalanche Zone Map</button>
    <button class="area-analysis">Area Wise Analysis</button>
    </div>
    <div className='image'>
      <img src='server.png' alt='server'/>
    </div>
  </div>
  );
}

export default Landing_page;
