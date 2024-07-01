import React from 'react';
import Navbar from './navbar';
import Landingpage from './Landing_page'; // Corrected filename
import NDRF from './ndrf';
import Safe from './safty_guide'; // Corrected filename
import Area from './Area-wise-analysis'; // Corrected filename
import Map from './map'; // Corrected filename
import InfoBox from './infobox';
import Dash from './dashboard'; // Corrected component name
 import Footer from '/.footer';
// Main App component
function App() {
  return (
    <>
      <Navbar />
      <Landingpage />
      <InfoBox />
      <Map />
      <Dash /> {/* Corrected component name */}
      <Area />
      <NDRF />
      <Safe /> {/* Corrected filename */}
      <Footer />
    </>
  );
}

export default App;
