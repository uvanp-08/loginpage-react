import React from 'react';
import './App.css';

function Welcome({ email }) {
  const handleLogout = () => {
    localStorage.removeItem('email');
    window.location.reload();
  };

  return (
    <div>
      <h2 className="welcome">Welcome, {email}!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Welcome;
