// src/App.js
import React from 'react';
import './App.css';
import  MapComponent from './map';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Leaflet Map in React</h1>
      </header>
      <MapComponent />
    </div>
  );
}

export default App;
