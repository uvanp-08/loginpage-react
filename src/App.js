import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    if (!validateEmail(newEmail)) {
      setEmailErrorMessage('Invalid email address');
    } else {
      setEmailErrorMessage('');
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setErrorMessage('');
  };

  const validateEmail = (email) => {
    const atIndex = email.indexOf('@');
    const dotIndex = email.lastIndexOf('.');

    return (
      atIndex > 0 &&
      dotIndex > atIndex + 1 &&
      dotIndex < email.length - 1
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setEmailErrorMessage('Invalid email address');
      return;
    }
    if (password.length === 0) {
      setErrorMessage('Password cannot be empty');
      return;
    }

    const testEmail = 'test@example.com';
    const testPassword = 'password123';

    if (email === testEmail && password === testPassword) {
      setIsLoggedIn(true);
      setErrorMessage('');
    } else {
      setErrorMessage('Incorrect email or password');
    }
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <h2 className="welcome">Welcome, {email}!</h2>
      ) : (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email:</label>
              <input type="email" value={email} onChange={handleEmailChange} />
              {emailErrorMessage && <p className="error-message">{emailErrorMessage}</p>}
            </div>
            <div>
              <label>Password:</label>
              <input type="password" value={password} onChange={handlePasswordChange} />
            </div>
            <button type="submit">Login</button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
