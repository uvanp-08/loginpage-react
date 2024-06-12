import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Welcome from './Welcome';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    if (savedEmail) {
      setEmail(savedEmail);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (email) => {
    setEmail(email);
    setIsLoggedIn(true);
    localStorage.setItem('email', email);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route path="/welcome" element={isLoggedIn ? <Welcome email={email} /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
