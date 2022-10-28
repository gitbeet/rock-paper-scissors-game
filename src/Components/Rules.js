import React from "react";
import "../css/Rules.css";
import rulesImg from "../images/image-rules.svg";
import closeButtonIcon from "../images/icon-close.svg";
import * as ReactDOM from "react-dom";

export default function Rules({ toggleShowRules }) {
  return ReactDOM.createPortal(
    <div className="rules">
      <div className="rules-menu">
        <p className="rules-text">RULES</p>
        <img
          className="close-button-desktop"
          onClick={() => toggleShowRules()}
          src={closeButtonIcon}
          alt="close button desktop"
        />
      </div>
      <img src={rulesImg} alt="rules" />
      <img
        className="close-button-mobile"
        onClick={() => toggleShowRules()}
        src={closeButtonIcon}
        alt="close button mobile"
      />
    </div>,
    document.getElementById("rules-portal")
  );
}
