import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="container">
      <div className="left-container">
        <form className="form">
          <h1 className="hello">Hello</h1>
          <p className="sigin-paragraph">Sign in into your account.</p>
          <div className="input-wrapper">
            <input type="text" placeholder="Username" className="email-input" />
          </div>
          <div className="input-wrapper">
            <input
              type="password"
              placeholder="Password"
              className="password-input"
            />
          </div>
          <div className="remember-me-container">
            <a href="#" className="remember-me">Remember me</a>
            <a href="#" className="forgot-password">Forgot password</a>
          </div>
          <div className="button-box"><button className="btn">Sign in</button></div>

          <div className="create-account">
            <span>
              Don't have an account?
              <Link to="/signup" className="create-account-link">
                Create
              </Link>
            </span>
          </div>
        </form>
      </div>
      <div className="right-container">
        <h1>Welcome Back!</h1>
        <p>
          Tic-tac-toe, noughts and crosses, or Xs and Os is a paper-and-pencil
          game for two players who take turns marking the spaces in a
          three-by-three grid with X or O. The player who succeeds in placing
          three of their marks in a horizontal, vertical, or diagonal row is the
          winner.
        </p>
      </div>
    </div>
  );
};

export default SignIn;



