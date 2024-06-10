import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    if (!validateEmail(newEmail)) {
      setEmailErrorMessage("Invalid email address");
    } else {
      setEmailErrorMessage("");
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setErrorMessage("");
  };

  const validateEmail = (email) => {
    const atIndex = email.indexOf("@");
    const dotIndex = email.lastIndexOf(".");

    return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setEmailErrorMessage("Invalid email address");
      return;
    }
    if (password.length === 0) {
      setErrorMessage("Password cannot be empty");
      return;
    }

    const testEmail = "test@example.com";
    const testPassword = "password123";

    if (email === testEmail && password === testPassword) {
      onLogin(email);
      navigate("/welcome");
    } else {
      setErrorMessage("Incorrect email or password");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
          {emailErrorMessage && (
            <p className="error-message">{emailErrorMessage}</p>
          )}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
}

export default Login;
