import "./App.css";
import React from "react";

export default function PigGame() {
  const [currentPlayer, setCurrentPlayer] = React.useState(true);
  const [scorePlayer1, setScorePlayer1] = React.useState(0);
  const [scorePlayer2, setScorePlayer2] = React.useState(0);
  const [presentRoll, setPresentRoll] = React.useState("-");
  const [turn, setTurn] = React.useState(0);
  const [maxCount, setMaxCount] = React.useState(100);

  const rollTurnSection = () => {
    const randomRoll = Math.floor(Math.random() * (7 - 1) + 1);
    setPresentRoll(randomRoll);
    if (currentPlayer && randomRoll === 1) {
      setTurn(randomRoll * 0);
      setCurrentPlayer(false);
    } else if (!currentPlayer && randomRoll === 1) {
      setTurn(randomRoll * 0);
      setCurrentPlayer(true);
    } else setTurn((turn) => turn + randomRoll);
  };

  const stickSection = () => {
    if (currentPlayer && presentRoll > 1) {
      setScorePlayer1((scorePlayer1) => scorePlayer1 + turn);
      setTurn(0);
      setCurrentPlayer(false);
    } else if (!currentPlayer && presentRoll > 1) {
      setScorePlayer2((scorePlayer2) => scorePlayer2 + turn);
      setTurn(0);
      setCurrentPlayer(true);
    }
  };

  const updateGameSection = () => {
    setCurrentPlayer("Player 1");
    setScorePlayer1(0);
    setScorePlayer2(0);
    setPresentRoll("-");
    setTurn(0);
  };

  const newGameSection = () => {
    setMaxCount(100);
    updateGameSection();
  };

  const newShortGameSection = () => {
    setMaxCount(30);
    updateGameSection();
  };

  const emojiVisibilityPlayer1 = () => {
    if (currentPlayer) {
      if (scorePlayer1 >= maxCount) {
        return "🏆";
      } else return "🐽";
    } else {
      ("");
    }
  };
  const emojiVisibilityPlayer2 = () => {
    if (!currentPlayer) {
      if (scorePlayer2 >= maxCount) {
        return "🏆";
      } else return "🐽";
    } else {
      ("");
    }
  };

  return (
    <div className="group-content">
      <h1 className="heading-style">Pig Game by Bukola! 🐷</h1>
      <h3 className="smaller-heading-style">(First to {maxCount})</h3>
      <div className="score-counter-player-1">
        <p className="score-style">{emojiVisibilityPlayer1()}</p>
        <p className="score-style">P1 Score: {scorePlayer1}</p>
      </div>

      <div className="score-counter-player-2">
        <p className="score-style">{emojiVisibilityPlayer2()}</p>
        <p className="score-style">P2 Score: {scorePlayer2}</p>
      </div>

      <div className="current-score-counter">
        <button
          className="roll-button-style"
          disabled={scorePlayer1 >= maxCount || scorePlayer2 >= maxCount}
          onClick={rollTurnSection}
        >
          Roll!
        </button>
        <p className="current-score-style">Last Roll:{presentRoll} </p>
        <p className="current-score-style">Turn Total: {turn}</p>
        <button
          className="stick-button-style"
          disabled={scorePlayer1 >= maxCount || scorePlayer2 >= maxCount}
          onClick={stickSection}
        >
          Stick!
        </button>
      </div>

      <div className="new-game-buttons">
        <button className="button-style" onClick={newGameSection}>
          New Game
        </button>
        <button className="button-style" onClick={newShortGameSection}>
          New Short Game
        </button>
      </div>
    </div>
  );
}
