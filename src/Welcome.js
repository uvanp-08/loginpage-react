import React from "react";
import "./App.css";

function Welcome({ email }) {
  return (
    <div>
      <h2 className="welcome">Welcome, {email}!</h2>
    </div>
  );
}

export default Welcome;
