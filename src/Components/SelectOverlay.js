import React from "react";
import "../css/SelectOverlay.css";
import CircleComponent from "./CircleComponent";
import bgTriangle from "../images/bg-triangle.svg";

export default function SelectOverlay({ playerSelect }) {
  return (
    <div className="select-overlay">
      <div className="bg-triangle-wrapper">
        <img
          className="bg-triangle"
          src={bgTriangle}
          alt="triangle background"
        />
      </div>
      <div className="paper">
        <CircleComponent type="paper" playerSelect={playerSelect} />
      </div>
      <div className="scissors">
        <CircleComponent type="scissors" playerSelect={playerSelect} />
      </div>
      <div className="rock">
        <CircleComponent type="rock" playerSelect={playerSelect} />
      </div>
    </div>
  );
}
