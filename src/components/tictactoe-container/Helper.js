import Swal from "sweetalert2";

export function decideWinner(arr, setGameState) {
  function checkDraw(param) {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
      for (let j = 0; j < arr[i].length; j += 1) {
        sum += arr[i][j].length;
      }
    }
    return sum;
  }

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
    setGameState("GAME_ENDED");
    Swal.fire("First Player Wins!");
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
    setGameState("GAME_ENDED");
    Swal.fire("Second Player Wins!");
  } else if (checkDraw(arr) === 9) {
    setGameState("GAME_ENDED");
    Swal.fire("Draw!");
  }
}
