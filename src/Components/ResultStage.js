import React from "react";
import "../css/ResultStage.css";
import CircleComponent from "./CircleComponent";
import EmptyCircle from "./EmptyCircle";

export default function ResultStage({
  selectedByPlayer,
  selectedByComputer = "",
  message,
}) {
  return (
    <div
      className={`${
        message ? "result-stage result-stage-message-gap" : "result-stage"
      }`}
    >
      <div className="result-stage-component-wrapper">
        <p className="result-stage-text-desktop">YOU PICKED</p>
        <CircleComponent
          type={selectedByPlayer}
          spotlight={[message === "You Win!", "win"]}
        />
        <p className="result-stage-text">YOU PICKED</p>
      </div>
      <div className="result-stage-component-wrapper">
        <p className="result-stage-text-desktop">THE HOUSE PICKED</p>
        {!selectedByComputer && <EmptyCircle />}
        {selectedByComputer && (
          <CircleComponent
            type={selectedByComputer}
            spotlight={[message === "You Lose!", "lose"]}
          />
        )}
        <p className="result-stage-text">THE HOUSE PICKED</p>
      </div>
    </div>
  );
}
