import React from "react";
import "../css/Score.css";

export default function Score({ score }) {
  return (
    <div className="score">
      <div className="score-header">
        <p className="score-word">ROCK</p>
        <p className="score-word">PAPER</p>
        <p className="score-word">SCISSORS</p>
      </div>
      <div className="score-square">
        <p className="score-score">SCORE</p>
        <p className="score-number">{score}</p>
      </div>
    </div>
  );
}
