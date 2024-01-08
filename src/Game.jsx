import { useState } from "react";
import Board from "./Board";
import "./Game.css";

export default function Game() {
  const [isXTurn, setIsXTurn] = useState(true);
  const [history, setHistory] = useState([Array(3).fill(Array(3).fill(""))]);
  const currentSquares = history[history.length - 1];

  const handlePlay = (nextSquares) => {
    setHistory([...history, nextSquares]);
    setIsXTurn(!isXTurn);
  };

  const undo = () => {
    if (history.length === 1) {
      return;
    }

    setHistory(history.slice(0, history.length - 1));
    setIsXTurn(!isXTurn);
  };

  const restart = () => {
    setHistory([Array(3).fill(Array(3).fill(""))]);
    setIsXTurn(true);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={currentSquares} onPlay={handlePlay} isXTurn={isXTurn} />
      </div>
      <div className="buttons">
        <button className="button-undo" onClick={undo}>
          Undo
        </button>
        <button className="button-restart" onClick={restart}>
          Restart
        </button>
      </div>
    </div>
  );
}
