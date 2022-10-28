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
        <CircleComponent
          type={selectedByPlayer}
          spotlight={[message === "You Win!", "win"]}
        />
        <p>YOU PICKED</p>
      </div>
      <div className="result-stage-component-wrapper">
        {!selectedByComputer && <EmptyCircle />}
        {selectedByComputer && (
          <CircleComponent
            type={selectedByComputer}
            spotlight={[message === "You Lose!", "lose"]}
          />
        )}
        <p>THE HOUSE PICKED</p>
      </div>
    </div>
  );
}
