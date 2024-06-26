import React, { useState } from "react";
import WordDisplay from "./wordDisplay";
import LetterButtons from "./letterButtons";
import GameStatus from "./gameStatus";
import randomWordData from "./randomWordData";

const pickRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * randomWordData.length);
  return randomWordData[randomIndex];
};

export default function HangmanGame() {
  const [selectedWord, setSelectedWord] = useState(pickRandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [missesCount, setMissesCount] = React.useState(0);
  const maxMisses = 10;

  const handleGuess = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters((guessedLetters) => [...guessedLetters, letter]);
    }
  };

  const wordToGuess = selectedWord
    .split("")
    .map((letter) => (guessedLetters.includes(letter) ? letter : "_ "))
    .join("");


  const resetGame = () => {
    setSelectedWord(pickRandomWord());
    setGuessedLetters([]);
    setMissesCount(0);
  };

  return (
    <div className="group-content">
      <h1 className="heading-style">Bukola Hangman Game</h1>
      <WordDisplay
        selectedWord={selectedWord}
        guessedLetters={guessedLetters}
      />
      <GameStatus
        wordToGuess={wordToGuess}
        guessedLetters={guessedLetters}
        selectedWord={selectedWord}
        maxMisses={maxMisses}
        missesCount={missesCount}
      />
      <p className="misses-count-style">number of misses: {missesCount}</p>

      <LetterButtons
        handleGuess={handleGuess}
        guessedLetters={guessedLetters}
        maxMisses={maxMisses}
        missesCount={missesCount}
      />
      <button onClick={resetGame} className="new-game-button">
        New Game
      </button>
    </div>
  );
}
