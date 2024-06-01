import React from 'react';
import ndrf_image from './ndrf_logo.png';
import './App.css';

function NDRF() {
  return (
    <>
     <div className='header-ndrf'><h1>NDRF</h1>
        </div>
      <div className='container-ndrf-main'>
        <div className='image-ndrf'>
          <img src={ndrf_image} alt='ndrf' />
        </div>
        <div className='passage-ndrf'>
          <p> ● National Disaster Response Force (NDRF) is a force of 12 battalions, organized on para-military lines, and manned by persons on deputation from the para-military forces of India: three Border Security Force, three Central Reserve Police Force, two Central Industrial Security Force, two Indo-Tibetan Border Police and two SashastraSeema Bal.</p>
          <br />
          <p>● The total strength of each battalion is approximately 1149. Each battalion is capable of providing 18 self-contained specialist search and rescue teams of 45 personnel each including engineers, technicians, electricians, dog squads and medical/paramedics.</p>
        </div>
      </div>
    </>
  );
}

export default NDRF;
