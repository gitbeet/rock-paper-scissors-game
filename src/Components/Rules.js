import React from "react";
import "../css/Rules.css";
import rulesImg from "../images/image-rules.svg";
import rulesCloseButton from "../images/icon-close.svg";
import * as ReactDOM from "react-dom";

export default function Rules({ toggleShowRules }) {
  return ReactDOM.createPortal(
    <div className="rules">
      <div className="rules-header">
        <p className="rules-text">RULES</p>
        <img
          className="rules-close-button"
          onClick={toggleShowRules}
          src={rulesCloseButton}
          alt="close button"
        />
      </div>
      <img className="rules-image" src={rulesImg} alt="rules" />
      <img
        className="rules-close-button-mobile"
        onClick={toggleShowRules}
        src={rulesCloseButton}
        alt="close button"
      />
    </div>,
    document.getElementById("rules-portal")
  );
}
