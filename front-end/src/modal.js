import React, { useState } from 'react';
import './App.css';

function WarningModal() {
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
      <div className="modal-content">
        <h2>Warning!</h2>
        <p>You are in a location where avalanches may occur. Please exercise caution.</p>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
}

export default WarningModal;
