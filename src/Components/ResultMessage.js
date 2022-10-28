import React from "react";
import "../css/ResultMessage.css";

export default function ResultMessage({ message, restartGame }) {
  return (
    <div className="result-message">
      <h1
        className={`${
          message === "You Win!"
            ? "result-message-text color-win"
            : message === "You Lose!"
            ? "result-message-text color-lose"
            : "result-message-text color-tie"
        }`}
      >
        {message.toUpperCase()}
      </h1>
      <button className="play-again-button" onClick={restartGame}>
        PLAY AGAIN
      </button>
    </div>
  );
}
