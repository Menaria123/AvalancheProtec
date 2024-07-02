import React, { useState } from 'react'; // Corrected to import useState
import Navbar from './navbar';
import LandingPage from './Landing_page'; // Corrected component name
import NDRF from './ndrf';
import SafetyGuide from './safty_guide'; // Corrected component name
import AreaWiseAnalysis from './Area-wise-analysis'; // Corrected component name
import Map from './map';
import InfoBox from './infobox';
import Dashboard from './dashboard'; // Corrected component name
import Footer from './footer'; // Corrected import path

import WarningModal from './modal'; // Corrected import and filename

function App() {
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && <WarningModal onClose={handleCloseModal} />}
      <Navbar />
      <LandingPage />
      <InfoBox />
      <Map />
      <Dashboard />
      <AreaWiseAnalysis />
      <NDRF />
      <SafetyGuide />
      <Footer />
    </>
  );
}

export default App;
