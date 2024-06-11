import React from 'react';
import './App.css';
// Main App component
function Safe() {
    return (
        <div className='continer-safe'>
            <div className='header-safe'>
                <h1>SAFETY GUIDELINES</h1>
            </div>
            <div className='passage-safe'><p>KNOW BEFORE YOU GO!</p></div>
            <div className='guide-safe'>
                <span>● Check the Forecast:</span> Always check the avalanche forecast for your specific area and activity.<br></br><br></br>
                <span>● Get Educated:</span> Take an avalanche safety course to learn about terrain, decision-making, and rescue.<br></br><br></br>
                <span>● Travel with a Partner:</span> Never go alone. A partner increases your chances of survival in an avalanche.<br></br><br></br>
                <span>● Recognize the Risks:</span> Learn to identify avalanche terrain like steep slopes, recent snowfall, and terrain traps.<br></br><br></br>
                <span>● Heed Red Flag Warnings:</span> These warnings indicate high avalanche danger.<br></br><br></br>
                <span>● Make Informed Decisions:</span> Use the forecast, current conditions, and your experience level to decide if it's safe to go.<br></br><br></br>
                <span>● Carry Avalanche Gear:</span> Pack a beacon, shovel, and probe whenever venturing into avalanche terrain.<br></br><br></br>
                <span>● Practice with Gear:</span> Know how to use your avalanche rescue equipment before you need it.<br></br><br></br>
                <span>● Be Prepared:</span> Carry a communication device (like a satellite messenger) and basic first-aid kit.<br></br><br></br>
            </div>
        </div>
    );
}

export default Safe;
