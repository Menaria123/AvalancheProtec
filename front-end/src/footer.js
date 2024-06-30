/* eslint-disable no-useless-escape */
import React from 'react';
import './App.css'; 
import linkedin from 'C:\Users\wasfa\OneDrive\Documents\GitHub\AvalancheProtec\front-end\src\linkedin.png';
import fb from 'C:\Users\wasfa\OneDrive\Documents\GitHub\AvalancheProtec\front-end\src\facebook.png';

const Foot = () => {
    return (
        <div className="footer">
            <div className="yo">
                CONTACT US
                <p>Avaguardians <br />
                    +91 7462469284 <br />
                    +91 7462469284</p>
            </div>
            <div className="yo">
                ADDRESS
                <pre>42, Rajpur Road
Ganges Nagar
Delhi, India</pre>
            </div>
            <div className="yo">
                CONNECT WITH US
                <div className="l">
                    <img className='logo' src={linkedin} alt="LinkedIn Logo" />
                    <img className='logo' src={fb} alt="Facebook Logo" />
                    <img className='logo' src='#' alt="insta" />
                    <img className='logo' src='#' alt="yt" />

                </div>
            </div>
        </div>
    );
};

export default Foot;
