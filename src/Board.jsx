/* eslint-disable react/prop-types */
import "./Board.css";
import Square from "./Square";

export default function Board({ isXTurn, squares, onPlay }) {
  const onSquareClick = (row, column) => {
    if (squares[row][column] || findWinner()) {
      return;
    }
    const value = isXTurn ? "X" : "O";
    const newSquares = squares.map((s, r) =>
      r === row ? s.map((val, col) => (col === column ? value : val)) : s
    );
    onPlay(newSquares);
  };

  const findWinner = () => {
    for (let i = 0; i < 3; i++) {
      if (
        squares[i][0] &&
        squares[i][0] === squares[i][1] &&
        squares[i][0] === squares[i][2]
      ) {
        return squares[i][0];
      }

      if (
        squares[0][i] &&
        squares[0][i] === squares[1][i] &&
        squares[0][i] === squares[2][i]
      ) {
        return squares[0][i];
      }

      if (
        squares[0][0] &&
        squares[0][0] === squares[1][1] &&
        squares[0][0] === squares[2][2]
      ) {
        return squares[0][0];
      }

      if (
        squares[0][2] &&
        squares[0][2] === squares[1][1] &&
        squares[0][2] === squares[2][0]
      ) {
        return squares[0][2];
      }
    }

    return null;
  };

  const winner = findWinner();

  // TODO: Introduce students why we shouldn't use onSquareClick={onSquareClick(0, "X")} - because of it is executed immediately (when view is rendered)

  return (
    <>
      {winner && (
        <div className="title">
          <h1>Winner is {winner}</h1>
        </div>
      )}
      <div className="board">
        {squares.map((row, rowIdx) => {
          return (
            <div key={"row " + rowIdx} className="board-row">
              {row.map((square, column) => (
                <Square
                  key={"square " + column}
                  value={square}
                  onSquareClick={() => onSquareClick(rowIdx, column)}
                />
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
}
