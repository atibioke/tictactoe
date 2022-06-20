import React, { useState } from "react";
import "./TicTacToe.css";
import Swal from 'sweetalert2'
const Swal = require('sweetalert2')

const TicTacToe = () => {
  // const [ startGame, setStartGame] = useState(false);
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const [gameValue, setGameValue] = useState("X");

  const handleClick = (parentIndex, childIndex) => {
    const boardCopy = board.map((e) => e.map((v) => v));
    boardCopy[parentIndex][childIndex] = gameValue;

    setBoard(boardCopy);

    if (gameValue === "X") {
      setGameValue("O");
    } else {
      setGameValue("X");
    }
  };

  function gameState(arr) {
    if (
      (arr[0][0] === "X" && arr[0][1] === "X" && arr[0][2] === "X") ||
      (arr[1][0] === "X" && arr[1][1] === "X" && arr[1][2] === "X") ||
      (arr[2][0] === "X" && arr[2][1] === "X" && arr[2][2] === "X") ||
      (arr[0][0] === "X" && arr[1][0] === "X" && arr[2][0] === "X") ||
      (arr[0][1] === "X" && arr[1][1] === "X" && arr[2][1] === "X") ||
      (arr[0][2] === "X" && arr[1][2] === "X" && arr[2][2] === "X") ||
      (arr[0][0] === "X" && arr[1][1] === "X" && arr[2][2] === "X") ||
      (arr[0][2] === "X" && arr[1][1] === "X" && arr[2][0] === "X")
    ) {
      console.log("first player wins");
    } else if (
      (arr[0][0] === "O" && arr[0][1] === "O" && arr[0][2] === "O") ||
      (arr[1][0] === "O" && arr[1][1] === "O" && arr[1][2] === "O") ||
      (arr[2][0] === "O" && arr[2][1] === "O" && arr[2][2] === "O") ||
      (arr[0][0] === "O" && arr[1][0] === "O" && arr[2][0] === "O") ||
      (arr[0][1] === "O" && arr[1][1] === "O" && arr[2][1] === "O") ||
      (arr[0][2] === "O" && arr[1][2] === "O" && arr[2][2] === "O") ||
      (arr[0][0] === "O" && arr[1][1] === "O" && arr[2][2] === "O") ||
      (arr[0][2] === "O" && arr[1][1] === "O" && arr[2][0] === "O")
    ) {
      console.log("second player wins");
    }
  }

  gameState(board);

  return (
    <React.Fragment>
      <section className="game-container">
        <section className="game-inner-container">
          {board.map((box, parentIndex) => {
            return box.map((e, childIndex) => {
              return (
                <div
                  key={`${childIndex}-box`}
                  className="grid-hole"
                  onClick={() => handleClick(parentIndex, childIndex)}
                >
                  {e}
                </div>
              );
            });
          })}
        </section>
      </section>
      {/* <button onClick={()=> setBoard('X')}>restart</button> */}
    </React.Fragment>
  );
};

export default TicTacToe;
