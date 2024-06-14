import React, { useState } from 'react';
import './App.css';

function Welcome({ email }) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('email');
    window.location.reload(); // Refresh the page after logout
  };

  const toggleConfirmation = () => {
    setShowConfirmation(!showConfirmation);
  };

  return (
    <div>
      <h2 className="welcome">Welcome, {email}!</h2>
      <button onClick={toggleConfirmation}>Logout</button>
      {showConfirmation && (
        <div className="confirmation-modal">
          <p>Are you sure you want to log out?</p>
          <button onClick={handleLogout}>Yes</button>
          <button onClick={toggleConfirmation}>No</button>
        </div>
      )}
    </div>
  );
}

export default Welcome;
