import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Register: React.FC = () => {
  return (
    <div className="container">
      <div className="heading">
        <h3>Register</h3>
      </div>
      <div className="form">
        <div className="loginForm register">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="email@example.com"
            required
          />
          <label>Create Password</label>
          <input type="password" name="password" />
        </div>
      </div>
      <button className="btn">Log In</button>
      <p>
        Old Here?<Link to="/login"> Login</Link>
      </p>
    </div>
  );
};

export default Register;
