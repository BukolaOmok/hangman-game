import "./App.css";
import React from "react";

export default function PigGame() {
  const [scorePlayer1, setScorePlayer1] = React.useState(0);
  const [scorePlayer2, setScorePlayer2] = React.useState(0);
  const [presentRoll, setPresentRoll] = React.useState("-");
  const [turn, setTurn] = React.useState(0);
  const [emojiPlayer1, setEmojiplayer1] = React.useState("🐽");
  const [emojiPlayer2, setEmojiplayer2] = React.useState("");
  const [stick, setStick] = React.useState(true);
  const [emojiUpdate, setEmojiUpdate] = React.useState(false);
  const [maxCount, setMaxCount] = React.useState(100);
  const [newGame, setNewGame] = React.useState(true);

  const rollTurnSection = () => {
    const randomRoll = Math.floor(Math.random() * (7 - 1) + 1);
    setPresentRoll(randomRoll);
    if (presentRoll === "-") {
      setTurn((turn) => turn + randomRoll);
    } else if (randomRoll === 1) {
      setTurn(randomRoll * 0);
      emojiSection();
    } else setTurn((turn) => turn + randomRoll);
  };

  const stickSection = () => {
    if (stick) {
      setStick(false);
    } else {
      setStick(true);
    }

    if (stick) {
      setScorePlayer1((scorePlayer1) => scorePlayer1 + turn);
      emojiSection();
      setTurn(0);
    } else {
      setScorePlayer2((scorePlayer2) => scorePlayer2 + turn);
      emojiSection();
      setTurn(0);
    }
  };

  const emojiSection = () => {
    if (emojiUpdate) {
      setEmojiUpdate(false);
    } else {
      setEmojiUpdate(true);
    }

    if (emojiUpdate) {
      setEmojiplayer1("🐽");
      setEmojiplayer2("");
    } else {
      setEmojiplayer1("");
      setEmojiplayer2("🐽");
    }
  };

  const updateGameSection = () => {

    setScorePlayer1(0);
    setScorePlayer2(0);
    setEmojiplayer1("🐽");
    setEmojiplayer2("");
    setPresentRoll("-");
    setTurn(0);
    setStick(true);
    setEmojiUpdate(true);
  };

  const newGameSection = () => {
    setNewGame(true);
    setMaxCount(100);
    updateGameSection();
  };

  const newShortGameSection = () => {
    setNewGame(false);
    setMaxCount(30);
    updateGameSection();
  };

  const changePigToGold = () => {
    if (scorePlayer1 >= maxCount) {
      setEmojiplayer1("🏆");
    } else if (scorePlayer2 >= maxCount) {
      setEmojiplayer2("🏆");
    }
  };

  return (
    <div className="group-content">
      <h1 className="heading-style">Pig Game by Bukola! 🐷</h1>
      <h3 className="smaller-heading-style">(First to {maxCount})</h3>
      <div className="score-counter-player-1">
        <p className="score-style">{emojiPlayer1}</p>
        <p className="score-style">P1 Score: {scorePlayer1}</p>
        </div>

        <div className="score-counter-player-2">
        <p className="score-style">{emojiPlayer2}</p>
        <p className="score-style">P2 Score: {scorePlayer2}</p>
        </div>
      

      <div className="current-score-counter">
        <button
          className="current-score-style"
          disabled={scorePlayer1 >= maxCount || scorePlayer2 >= maxCount}
          onClick={rollTurnSection}
        >
          Roll!
        </button>
        <p className="current-score-style">Last Roll:{presentRoll} </p>
        <p className="current-score-style">Turn Total: {turn}</p>
        <button
          className="current-score-style"
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
