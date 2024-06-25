import React from 'react';
import './App.css';

const Dash = () => {
    return (
        <div>
            <h1>MONITORING DASHBOARD</h1>
            <div className="dash-container">
                <div className="location">
                    LOCATION :
                    <div className="dropdown">
                        <label className="dropdown__face">
                            <input type="checkbox" />
                            <span>Select Location</span>
                            <div className="dropdown__arrow"></div>
                            <ul className="dropdown__items">
                                <li><option value="location1">Location 1</option></li>
                                <li><option value="location2">Location 2</option></li>
                                <li><option value="location3">Location 3</option></li>
                            </ul>
                        </label>
                    </div>
                </div>
                <div className="server-data">
                    <h1>SERVER DATA</h1>
                    <hr /> {/* Self-closing tag */}
                    <div className="data">
                        <div className="atmospheric-data">
                            <h5>ATMOSPHERIC DATA</h5>
                            <p>WEATHER CONDITION</p>
                            <p>WIND SPEED</p>
                            <p>TEMPERATURE</p>
                            <p>BAROMETRIC PRESSURE</p>
                            <p>HUMIDITY</p>
                            <p>PRECIPITATION</p>
                        </div>
                        <div className="units">
                            <h5>UNITS</h5>
                            <p>Cloudy</p>
                            <p>10 mph</p>
                            <p>20°C</p>
                            <p>1015 mb</p>
                            <p>60%</p>
                            <p>0.1 inches</p>
                        </div>
                    </div>
                </div>
                <div className="sensor-data">
                    <h1>SENSOR DATA</h1>
                    <hr /> {/* Self-closing tag */}
                    <div className="data">
                        <div className="atmospheric-data">
                            <h5>ACCELEROMETER DATA</h5>
                            <p>TILT</p>
                            <p>VIBRATION</p>
                            <p>ACCELERATION</p>
                        </div>
                        <div className="units">
                            <h5>UNITS</h5>
                            <p>20°</p>
                            <p>0.5 m/s²</p>
                            <p>9.8 m/s²</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dash;
