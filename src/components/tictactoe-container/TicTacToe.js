import React, { useState } from "react";
import { decideWinner } from "./Helper";

const TicTacToe = () => {
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const [gameValue, setGameValue] = useState("X");
  const [gameState, setGameState] = useState("");

  const handleClick = (parentIndex, childIndex) => {
    if (!board[parentIndex][childIndex] && gameState !== "GAME_ENDED") {
      const boardCopy = board.map((e) => e.map((v) => v));
      boardCopy[parentIndex][childIndex] = gameValue;

      setBoard(boardCopy);

      if (gameValue === "X") {
        setGameValue("O");
      } else {
        setGameValue("X");
      }
      decideWinner(boardCopy, setGameState);
    }
  };

  const handleRestart = () => {
    setGameState("GAME_STARTED");
    setGameValue("X");
    setBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
  };

  return (
    <React.Fragment>
      <section className="game-container">
        <section className="game-inner-container">
          {board.map((boardInitialElements, parentIndex) => {
            return boardInitialElements.map((value, childIndex) => {
              return (
                <div
                  key={`${childIndex}-box`}
                  className="grid-hole"
                  onClick={() => handleClick(parentIndex, childIndex)}
                >
                  {value}
                </div>
              );
            });
          })}
        </section>
      </section>
     <section className="reStartBtn-container">  <button className="reStartBtn" onClick={() => handleRestart()}>restart</button></section>

    </React.Fragment>
  );
};

export default TicTacToe;
