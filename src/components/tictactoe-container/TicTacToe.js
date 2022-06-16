import React from "react";
import "./TicTacToe.css";

const TicTacToe = () => {
  return (
    <React.Fragment>
      <section className="game-container">
        <section className="game-inner-container">
          <div className="grid-hole"></div>
          <div className="grid-hole"></div>
          <div className="grid-hole"></div>
          <div className="grid-hole"></div>
          <div className="grid-hole"></div>
          <div className="grid-hole"></div>
          <div className="grid-hole"></div>
          <div className="grid-hole"></div>
          <div className="grid-hole"></div>
        </section>
      </section>
    </React.Fragment>
  );
};

export default TicTacToe;
