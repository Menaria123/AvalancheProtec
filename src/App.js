import React, { useState } from 'react';
import Navbar from './navbar';//for the navbar 
import Landingpage from './Landing_page' //for the landing page
import NDRF from './ndrf'; //for the ndrf part 
import Safe from './safty_guide'; //for the safty guide 
import Area from './Area-wise-analyisi'; // for the graph of area wise analysis
import Map from './map' //for map in the page 
import InfoBox from './infobox'; //for indicartion of the danger 
import Dash from './dashboard'; //For the dashbord
import Foot from './foot'; // for of the page 
import WarningModal from './modal'; // Corrected import and filename
import Sdrf from './sdrf';

function App() {
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      {showModal && <WarningModal onClose={handleCloseModal} />}
      <Navbar />
      <Landingpage />
      <InfoBox />
      <Map />
      <Dash/>
      <Area />
      <NDRF />
      <Sdrf />
      <Safe />
      <Foot />
    </>
  );
}

export default App;
