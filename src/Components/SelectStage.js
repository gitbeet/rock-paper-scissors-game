import React from "react";
import "../css/SelectStage.css";
import SelectOverlay from "./SelectOverlay";

export default function SelectStage({ playerSelect }) {
  return (
    <div className="select-stage">
      <SelectOverlay playerSelect={playerSelect} />
    </div>
  );
}
