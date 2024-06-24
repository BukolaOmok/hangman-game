import "./App.css";
import React from "react";
import letterData from "./letterData";

export default function HangmanGame() {
  const actualWord = "bukola";
  const splitWordToGuess = actualWord.split("");

  const [wordToGuess, setWordToGuess] = React.useState(
    splitWordToGuess.map(() => "_ ")
  );
  const [guessedLetters, setGuessedLetters] = React.useState([]);
  const [missesCount, setMissesCount] = React.useState(0);

  const updateGuessedLettersArray = (letter) => {
    setGuessedLetters((prevGuessedLetters) => [...prevGuessedLetters, letter]);

    if (!splitWordToGuess.includes(letter)) {
      setMissesCount((missesCount) => missesCount + 1);
    } else {
      revealGuessedLetters(letter);
    }
  };

  const revealGuessedLetters = (letter) => {
    const revealedWord = splitWordToGuess.map((l, index) => {
      if (guessedLetters.includes(l) || l === letter) {
        return l;
      } else {
        return "_";
      }
    });
    setWordToGuess(revealedWord);
  };

  const handleGuesses = (letter) => {
    if (!guessedLetters.includes(letter)) {
      updateGuessedLettersArray(letter);
    }
  };


  return (
    <div className="group-content">
      <h1 className="heading-style">Bukola Hangman Game</h1>
      <h3 className="guessed-word-style">{wordToGuess}</h3>
      <p className="misses-count-style">number of misses: {missesCount}</p>

      <div className="group-letter">
        {letterData.map((letter =>
      <button key={letter} className="letter" onClick={handleGuesses(letter)}>
      {letter}
    </button>
    ))}
    </div>
    </div>
  );
}
