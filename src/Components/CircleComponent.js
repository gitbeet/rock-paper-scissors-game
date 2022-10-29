import React, { useEffect, useState } from "react";
import "../css/CircleComponent.css";
import rockImage from "../images/icon-rock.svg";
import paperImage from "../images/icon-paper.svg";
import scissorsImage from "../images/icon-scissors.svg";

export default function CircleComponent({
  type,
  playerSelect,
  spotlight = [false, ""],
}) {
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    console.log(pressed);
  }, [pressed]);

  return (
    <div
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      onClick={() => playerSelect(type)}
      className={
        spotlight[0] && spotlight[1] === "win"
          ? `circle-component${pressed ? "-pressed" : ""} spotlight-win`
          : spotlight[0] && spotlight[1] === "lose"
          ? `circle-component${pressed ? "-pressed" : ""} spotlight-lose`
          : `circle-component${pressed ? "-pressed" : ""}`
      }
    >
      <img
        className="circle-image"
        src={
          type === "rock"
            ? rockImage
            : type === "paper"
            ? paperImage
            : scissorsImage
        }
        alt="rock paper or scissors"
      />
      <div className={pressed ? "circle-white-pressed" : "circle-white"}></div>
      <div
        className={
          pressed ? "circle-white-shadow-pressed" : "circle-white-shadow"
        }
      ></div>
      <div
        className={
          pressed
            ? "circle-color-shadow-top-pressed"
            : `circle-color-shadow-top-${type}`
        }
      ></div>
      <div className={`circle-color-${type}`}></div>
      <div
        className={
          pressed
            ? "circle-color-shadow-pressed"
            : `circle-color-shadow-${type}`
        }
      ></div>
    </div>
  );
}
