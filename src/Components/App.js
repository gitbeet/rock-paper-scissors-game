import { useEffect, useState } from "react";
import "../css/App.css";
import ResultMessage from "./ResultMessage";
import ResultStage from "./ResultStage";
import Rules from "./Rules";
import Score from "./Score";
import SelectStage from "./SelectStage";

function App() {
  const [showRules, setShowRules] = useState(false);
  const [score, setScore] = useState(0);
  const [stage, setStage] = useState("select");
  const [selected, setSelected] = useState(false);
  const [selectedByPlayer, setSelectedByPlayer] = useState("");
  const [selectedByComputer, setSelectedByComputer] = useState("");
  const [decidedWinner, setDecidedWinner] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const localStorageScore = localStorage.getItem("gameScore");
    if (!localStorageScore) return;
    setScore(JSON.parse(localStorageScore));
  }, []);

  useEffect(() => {
    localStorage.setItem("gameScore", JSON.stringify(score));
  }, [score]);

  useEffect(() => {
    if (selectedByPlayer === "" || selectedByComputer === "") return;
    setTimeout(() => {
      decideWinner();
    }, 1000);
  }, [selectedByComputer]);

  function computerSelect() {
    console.log("computerSelect");
    const value = Math.ceil(Math.random() * 3);
    if (value === 1) {
      setSelectedByComputer("rock");
    } else if (value === 2) {
      setSelectedByComputer("paper");
    } else if (value === 3) {
      setSelectedByComputer("scissors");
    }
  }

  function decideWinner() {
    console.log("deciding winner");
    console.log(selectedByComputer, selectedByPlayer);
    if (selectedByComputer === "" || selectedByPlayer === "") return;

    if (selectedByComputer === selectedByPlayer) {
      setMessage(`It's a tie!`);
    } else if (selectedByPlayer === "rock") {
      if (selectedByComputer === "paper") {
        setMessage("You Lose!");
        setScore((prev) => (prev < 1 ? 0 : prev - 1));
      } else {
        setMessage("You Win!");
        setScore((prev) => prev + 1);
      }
    } else if (selectedByPlayer === "paper") {
      if (selectedByComputer === "scissors") {
        setMessage("You Lose!");
        setScore((prev) => (prev < 1 ? 0 : prev - 1));
      } else {
        setMessage("You Win!");
        setScore((prev) => prev + 1);
      }
    } else if (selectedByPlayer === "scissors") {
      if (selectedByComputer === "rock") {
        setMessage("You Lose!");
        setScore((prev) => (prev < 1 ? 0 : prev - 1));
      } else {
        setMessage("You Win!");
        setScore((prev) => prev + 1);
      }
    }
    setDecidedWinner(true);
    console.log("winner decided");
  }

  function playerSelect(value) {
    setSelectedByPlayer(value);
    setTimeout(() => {
      computerSelect();
    }, 2000);

    setSelected((prev) => !prev);
  }

  function restartGame() {
    setSelectedByPlayer("");
    setSelectedByComputer("");
    setMessage("");
    setDecidedWinner(false);
  }

  return (
    <div className="container">
      <div className="global-wrapper">
        <Score score={score} />
        <div className="stages-container">
          {!selectedByPlayer && <SelectStage playerSelect={playerSelect} />}
          {selectedByPlayer && (
            <ResultStage
              message={message}
              selectedByPlayer={selectedByPlayer}
              selectedByComputer={selectedByComputer}
            />
          )}
        </div>
        {message && (
          <ResultMessage message={message} restartGame={restartGame} />
        )}
        <button
          className="rules-button"
          onClick={() => setShowRules((prev) => !prev)}
        >
          RULES
        </button>
        {showRules && (
          <Rules toggleShowRules={() => setShowRules((prev) => !prev)} />
        )}
      </div>
    </div>
  );
}

export default App;
