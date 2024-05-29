import React, { useState } from 'react';
import './App.css';
import Navbar from './navbar';
import Landing_page from './Landing_page';
import marqee from './marqee';

// Main App component
function App() {
  return (
    <>
      <div className='navbar'>
        <Navbar />
      </div>
      <marqee />
      <Landing_page />
    </>
  );
}

export default App;
