/* eslint-disable no-useless-escape */
import React from 'react';
import './App.css'; 
import fb from './facebook.png';
import linkedin from './linkedin.png';
import insta from './insta.png';
import yt from './yt.png';

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
                <pre>42, Rajpur Road <br />
                    Ganges Nagar <br />
                    Delhi, India</pre>
            </div>
            <div className="yo">
                <pre>                      CONNECT WITH US</pre>
                <div className="l">
                    <img className='logo-f1' src={linkedin} alt="LinkedIn Logo" />
                    <img className='logo-f2' src={fb} alt="Facebook Logo" />
                    <img className='logo-f3' src={insta} alt="Instagram Logo" />
                    <img className='logo-f4' src={yt} alt="YouTube Logo" />
                </div>
            </div>
            <div className='yo'>
            <pre>To Learn more <br /> about us <br />
            click here </pre>
             <div className='about'>
             <button>ABOUT US</button>
             </div>
            </div>
            <div className='cc'>© 2024 AvaGuardians. All rights reserved. </div>
        </div>
    );
};
export default Foot;