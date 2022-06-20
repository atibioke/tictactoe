import React, { useState } from "react";
import "./TicTacToe.css";

const TicTacToe = () => {
  // const [ startGame, setStartGame] = useState(false);
  const [gameValue, setGameValue] = useState("");

  const handleClick = (index) => {
    if (index !== -1) {
      if (gameValue === "X") {
        setGameValue("O");
      } else {
        setGameValue("X");
      }
    }
  };

  // if(startGame){

  // }

  return (
    <React.Fragment>
      <section className="game-container">
        <section className="game-inner-container">
          {Array(9)
            .fill(0)
            .map((box, index) => {
              return (
                <div
                  key={index}
                  className="grid-hole"
                  onClick={() => handleClick(index)}
                >
                  {gameValue}
                </div>
              );
            })}
        </section>
      </section>
      {/* <button onClick={()=> setStartGame(true)}>restart</button> */}
    </React.Fragment>
  );
};

export default TicTacToe;
