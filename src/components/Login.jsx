import React, { useState } from 'react';
import '../index.css';

const Login = () => {
  const [isHidden, setIsHidden] = useState(false);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };


  return (
    <div className={`login-container ${isHidden ? 'hidden' : ''}`}>
      <button className="toggle-button" onClick={toggleVisibility}>
        <span>&#9733;JOIN US</span>
      </button>
      <div className="login-form">
        <h2>Welcome !</h2>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
        <p className="forgot-password">Forgot your password?</p>
      </div>
    </div>
  );
};

export default Login;




