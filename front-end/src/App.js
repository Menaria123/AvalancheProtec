import React from 'react';
import Navbar from './navbar';
import Landingpage from './Landing_page'
import NDRF from './ndrf';
import Safe from './safty_guide';
import Area from './Area-wise-analyisi';
import Map from './map'
import InfoBox from './infobox';
// Main App component
function App() {
  return (
    <>
      <Navbar />
      <Landingpage />
      <InfoBox />
      <Map />
      <Area />
      <NDRF />
      <Safe />
    </>
  );
}

export default App;
