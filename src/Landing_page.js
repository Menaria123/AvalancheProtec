import React from 'react';
import './App.css';
import server from './server.png'

// Main App component
function Landingpage() {
  return (
    <div className='Landing_page'>
      <div className='content'>
        <div className='text'>
          <div className='header'>
            <h1>AVALANCHE WARNING SYSTEM</h1>
          </div>
          <div className='passage'>
            <p>Our system serves as an early warning mechanism for detecting potential avalanches in mountainous areas. It employs a combination of sensors, server analysis, and machine learning algorithms to predict avalanches and issue alerts to people in those areas.</p>
          </div>
          <div className='button'>
            <button className="avalanche-zone-map">Avalanche Zone Map</button>
            <button className="area-analysis">Area Wise Analysis</button>
          </div>
        </div>
        <div className='image'>
          <img src={server} alt="server" />
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
