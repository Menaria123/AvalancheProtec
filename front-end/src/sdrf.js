import React from 'react';
import './App.css';
// import sdrf3 from './images/sdrf3.png';
// import sdrf4 from './images/sdrf4.png';
// import sdrf5 from './images/sdrf5.png';
// import sdrf6 from './images/sdrf6.png';

const sdrfinfo = () => {
    return (
        <div className="sdrfinfo">
            <h1>SDRF</h1>
            <div className='sdrf-l'>
                <div className="sdrf-images">
                    <div className='r'>
                        <img src="https://www.sdrfup.in/images/mainlogo.png" alt="SDRF Logo 1" />
                        <img src="data:image/jpeg;base64,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" alt="SDRF Logo 2" />
                    </div>
                    <div className='r'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUiIdDK8JPi-ukNXXweYc64yshrof8FqRZH4drnBd28j9zyNg4" alt="SDRF Logo 3" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwoUWMhEvtNDnmTyqVXBBZqVG2ceu7j9TKDO8hG0hsaxjotUZh" alt="SDRF Logo 4" />
                    </div>
                    <div className='r'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo5EtnfkGZekvLyTUUGY0Ief9zTJIII9ZDk9dL-nTfTcOjEkIw" alt="SDRF Logo 5" />
                        <img src="data:image/jpeg;base64,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" alt="SDRF Logo 6" />
                    </div>
                    </div>
                    <div className="sdrf-text">
                        <ul>
                            <li>As per National Policy on Disaster Management 2009, the State Governments are required to raise their own SDRF for quickly responding to disasters.</li>
                            <li>As per information available, 24 State/UTs have raised their SDRF.</li>
                            <li>These SDRF are placed strategically at suitable locations well connected to the airport, rail heads and roads for their immediate deployment at the disaster sites.</li>
                            <li>The SDRF are also be used for Community Capacity Building and Awareness Generation programmes within the State.</li>
                            <li>During these programmes, SDRF can familiarize themselves with terrain, critical buildings and other existing infrastructure for prompt responses at the time of disasters and simultaneously work with the community, including school children, village volunteers and other stakeholders on what to do during disasters.</li>
                        </ul>
                    </div>
            </div>
            <div className="sdrf-alert">
                During avalanche alerts, our system promptly notifies both the National Disaster Response Force (NDRF) and State Disaster Response Forces (SDRF). This ensures swift coordination and response efforts to mitigate the impact of avalanches.
            </div>
        </div>
    );
}

export default sdrfinfo;
