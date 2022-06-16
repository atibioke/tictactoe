import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import SignUp from "../src/components/SignUp/SignUp";
import TicTacToe from "../src/components/tictactoe-container/TicTacToe";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="tictactoe" element={<TicTacToe />} />
    </Routes>
  </BrowserRouter>
);







