import React from "react";
// import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="container">
      <div className="left-container">
        <form className="form">
          <h1 className="hello">Hello, friend</h1>
          <p className="sigin-paragraph">Sign in into your account.</p>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Username"
              className="username-input"
            />
          </div>
          <div className="input-wrapper">
            <input type="email" placeholder="Email" className="email-input" />
          </div>
          <div className="input-wrapper">
            <input
              type="password"
              placeholder="Password"
              className="password-input"
            />
          </div>
          <div className="remember-me-container">
            <p>I read and agree to</p>
            {/* <Link to="#" className="remember-me">
               Terms & Conditions
            </Link> */}
            {/* <a href="#" className="forgot-password">
              Forgot password
            </a> */}
          </div>
          <div className="button-box">
            <button className="btn">Sign Up</button>
          </div>

          {/* <div className="create-account">
            <span>
              Already have an account?
              <Link to="/signin" className="create-account-link">
                Sign in
              </Link>
            </span>
          </div> */}
        </form>
      </div>
      <div className="right-container">
        <h1>Glad to see you!</h1>
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

export default SignUp;
