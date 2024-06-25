import "./App.css";
import React from "react";
import letterData from "./letterData";

export default function HangmanGame() {
  const actualWord = "bukola";
  const splitWordToGuess = actualWord.split("");
  const maxMisses = 10;

  const [wordToGuess, setWordToGuess] = React.useState(
    splitWordToGuess.map(() => "_ ")
  );
  const [guessedLetters, setGuessedLetters] = React.useState([]);
  const [missesCount, setMissesCount] = React.useState(0);
 

  const revealGuessedLetters = (letter) => {
    const revealedLetters = wordToGuess.map((char, index) => {
      if (
        splitWordToGuess[index] === letter ||
        guessedLetters.includes(splitWordToGuess[index])
      ) {
        return splitWordToGuess[index];
      } else {
        return char;
      }
    });
    setWordToGuess(revealedLetters);
  };

  const handleGuesses = (letter) => () => {
    if (!guessedLetters.includes(letter)) {
      const newGuessedLetters = [...guessedLetters, letter];
      setGuessedLetters(newGuessedLetters);
      if (actualWord.includes(letter)) {
        revealGuessedLetters(letter, newGuessedLetters);
      } else {
        updateMissesCount();
      }
    }
  };

  const updateMissesCount = () => {
    setMissesCount((missesCount) => missesCount + 1);
  };

  const winOrLose = () => {
    if (missesCount >= maxMisses) {
      return "You lose! Too many misses";
    } else if (missesCount < maxMisses && !wordToGuess.includes("_ ")) {
      return "You win!";
    }
  };

  return (
    <div className="group-content">
      <h1 className="heading-style">Bukola Hangman Game</h1>
      <h3 className="guessed-word-style">{wordToGuess}</h3>
      <p>{winOrLose()}</p>
      <p className="misses-count-style">number of misses: {missesCount}</p>

      <div className="group-letter">
        {letterData.map((letter) => (
          <button
            key={letter}
            className="letter"
            onClick={handleGuesses(letter)}
            disabled={guessedLetters.includes(letter) || !wordToGuess.includes("_ ") || missesCount >= maxMisses}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
}
