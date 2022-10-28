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
        style={{
          background: `linear-gradient(to top,${
            type === "scissors"
              ? "hsl(39, 89%, 49%) , hsl(40, 84%, 53%)"
              : type === "paper"
              ? "hsl(230, 89%, 62%) , hsl(230, 89%, 65%)"
              : "hsl(349, 71%, 52%) , hsl(349, 70%, 56%)"
          }`,
        }}
        className="circle-color"
      ></div>
      <div
        style={{
          backgroundColor: `${
            type === "rock"
              ? "hsl(349, 72%, 36%)"
              : type === "paper"
              ? "hsl(234, 70%, 52%)"
              : " hsl(29, 91%, 42%)"
          }`,
        }}
        className={
          pressed ? "circle-color-shadow-pressed" : "circle-color-shadow"
        }
      ></div>
    </div>
  );
}
