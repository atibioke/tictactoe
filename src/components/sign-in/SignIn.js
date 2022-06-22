import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate()
  const [inValid, setInValid] = useState(false);
  const [isError, setIsError] = useState(false);
  const [validation, setValidation] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      setInValid(true);
    }

    if (!password) {
      setIsError(true);
    }



    if (username && password) {
      setUsername(username)
      setPassword(password);
     
      setInValid(false);
      setIsError(false);
      setPassword("");
      setUsername("");

     
    }


    const validData = JSON.parse(localStorage.getItem('myData'))
    if(!validData){
      setValidation(true)
    }else{
      if(username === validData.username && password === validData.password){
        console.log(username, 'username');
        console.log(password, 'password');
        console.log(validData.username, 'validData.username');
        console.log(validData.password, 'validData.password');
       navigate('/tictactoe')
      }
    }
 

   
    
  };

  return (
    <div className="container">
      <div className="left-container">
        <form className="form">
          {validation && <span className="span-modal">Incorrect username or password</span>}
          <h1 className="hello">Hello</h1>
          <p className="sigin-paragraph">Sign in into your account.</p>
          <div className="input-wrapper">
           <div className="modal">
           <input
              type="text"
              placeholder="Username"
              className="email-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {inValid && <span className="span-modal">input username</span>}
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
            {isError && <span className="span-modal">input password</span>}
           </div>
          </div>
          <div className="remember-me-container">
            <a href="/signin" className="remember-me">
              Remember me
            </a>
            <a href="/signin" className="forgot-password">
              Forgot password
            </a>
          </div>
          <div className="button-box">
            <button className="btn" onClick={(e) => handleSubmit(e)}>
              Sign in
            </button>
          </div>

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
