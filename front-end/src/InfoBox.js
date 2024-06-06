import React from 'react';
import './App.css';

const QuickInfo = () => {
  return (
    <div className="info">
      <div className="B1">
        <h5>QUICK INFORMATIONS</h5>
        <div id="line"></div>
        <div className='info-container'>
        <div className="district"> 
            <h4>Most Affected District</h4>
            <p>No. of Alerts</p>
            <p>No. of High Alerts</p>
            <p>No. of Amber Alerts</p>
        </div>
        <div className='disname'>
            <h4>Siachin Glacier</h4>
            <p>11</p>
            <p>05</p>
            <p>03</p>
        </div>
        </div>
      </div>
      <div className="B2">
        <div className='head'>
        <h5 id='wl'>WARNING LOCATIONS</h5>
        <h5 id='rl'>Risk level</h5>
        </div>
        <div id="line"></div>
        <div className='info-container'>
        <div className="loc"> 
            <p>Siachin Glacier</p>
            <p>Ladakh</p>
            <p>Uttrakhand</p>
        </div>
        <div className='rlevel'>
            <p>🟥</p>
            <p>🟨</p>
            <p>🟩</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default QuickInfo;
