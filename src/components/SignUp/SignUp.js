import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [inValid, setInValid] = useState(false);
  const [isError, setIsError] = useState(false);

  const [validEmail, setValidEmail] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // new setup
  //   const [profile, setProfile] = useState([{username:'', password:'', email:''}])

  // console.log(profile, 'profile');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!username) {
        setInValid(true);
      }

      if (!password) {
        setIsError(true);
      }

      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        setValidEmail(true);
      }

      if (
        username &&
        password &&
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
      ) {
        setUsername(username);
        setPassword(password);
        setEmail(email);
// posting my details
        const myData = async () => {
          try {
            const body = { username, email, password}
            const response = await fetch("http://localhost:5001/tictactoe", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body)
            });
          } catch (error) {
            console.error(error.message);
          }
        };
// calling myData
        myData()
//
        setInValid(false);
        setIsError(false);

        setValidEmail(false);
        setPassword("");
        setUsername("");
        setEmail("");
        navigate("/tictactoe");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="container">
      <div className="left-container">
        <form className="form">
          <h1 className="hello">Hello, friend</h1>
          <p className="sigin-paragraph">Create an account.</p>
          <div className="input-wrapper">
            <div className="modal">
              <input
                type="text"
                placeholder="Username"
                className="username-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {inValid && (
                <span className="span-modal">username is required!</span>
              )}
            </div>
          </div>
          <div className="input-wrapper">
            <div className="modal">
              <input
                type="email"
                placeholder="Email"
                className="email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {validEmail && (
                <span className="span-modal"> valid email is required!</span>
              )}
            </div>
          </div>
          <div className="input-wrapper">
            <div className="modal">
              <input
                type="password"
                placeholder="Password"
                className="password-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {isError && (
                <span className="span-modal">password is required!</span>
              )}
            </div>
          </div>
          <div className="remember-me-container">
            {/* <Link to="#" className="remember-me">
               Terms & Conditions
            </Link> */}
            {/* <a href="#" className="forgot-password">
              Forgot password
            </a> */}
          </div>
          <div className="button-box">
            <button className="btn" onClick={(e) => handleSubmit(e)}>
              Submit
            </button>
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
