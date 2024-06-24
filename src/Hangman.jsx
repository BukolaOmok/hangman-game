import "./App.css";
import React from "react";
import letterData from "./letterData";

export default function HangmanGame() {
  const actualWord = "bukola";
  const splitWordToGuess = actualWord.split("");
  const maxMisses = actualWord.length + 5
  const [wordToGuess, setWordToGuess] = React.useState(
    splitWordToGuess.map(() => "_ ")
  );
  const [guessedLetters, setGuessedLetters] = React.useState([]);
  const [missesCount, setMissesCount] = React.useState(0);

  // const updateGuessedLettersArray = (letter) => {
  //   setGuessedLetters(guessedLetters => [...guessedLetters, letter]);

  //   if (!splitWordToGuess.includes(letter)) {
  //     setMissesCount(missesCount => missesCount + 1);
  //   } else {
  //     revealGuessedLetters(letter);
  //   }
  // };

  const revealGuessedLetters = (letter) => {
    const revealedWord = wordToGuess.map((char, index) => {
      if (splitWordToGuess[index] === letter || guessedLetters.includes(splitWordToGuess[index])) {
        return splitWordToGuess[index];
      } else {
        return char;
      }
    });
    setWordToGuess(revealedWord);
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
  setMissesCount(missesCount => missesCount + 1);
  if (missesCount > maxMisses) {
  setGameStatus('You lose! Too many misses');
  }
  };

  const winGameStatus = (revealedWord) => {
    if (!revealedWord.includes('_')) {
    setGameStatus('You win!');
    }
    };

  return (
    <div className="group-content">
      <h1 className="heading-style">Bukola Hangman Game</h1>
      <h3 className="guessed-word-style">{wordToGuess}</h3>
      <p className="misses-count-style">number of misses: {missesCount}</p>

      <div className="group-letter">
        {letterData.map((letter) => (
          <button
            key={letter}
            className="letter"
            onClick={handleGuesses(letter)}
            disabled = {guessedLetters.includes(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
}
