import "./App.css";
import React from "react";
import letterData from "./letterData";
import randomWordData from "./randomWordData";

export default function HangmanGame() {
  const pickRandomWord = (randomWordData) => {
    const randomWordIndex = Math.floor(Math.random() * randomWordData.length);
    const randomWord = randomWordData[randomWordIndex];
    return randomWord;
  };

  const [selectedWord, setSelectedWord] = React.useState(
    pickRandomWord(randomWordData)
  );

  const splitWordToGuess = selectedWord.split("");

  const maxMisses = 10;

  const [wordToGuess, setWordToGuess] = React.useState(
    splitWordToGuess.map(() => "_ ")
  );
  const [guessedLetters, setGuessedLetters] = React.useState([]);
  const [missesCount, setMissesCount] = React.useState(0);

  const revealGuessedLetters = (letter) => {
    const revealedLetters = wordToGuess.map((char, index) => {
      if (splitWordToGuess[index] === letter) {
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
      if (selectedWord.includes(letter)) {
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
      return (
        <div>
          You lose! Too many misses
          <br />
          <br />
          The word is: {selectedWord}
        </div>
      );
    } else if (missesCount < maxMisses && !wordToGuess.includes("_ ")) {
      return "You win!";
    }
  };

  return (
    <div className="group-content">
      <h1 className="heading-style">Bukola Hangman Game</h1>
      <h2 className="guessed-word-style">{wordToGuess}</h2>
      <p>{winOrLose()}</p>
      <p className="misses-count-style">number of misses: {missesCount}</p>

      <div className="group-letter">
        {letterData.map((letter) => (
          <button
            key={letter}
            className="letter"
            onClick={handleGuesses(letter)}
            disabled={
              guessedLetters.includes(letter) ||
              !wordToGuess.includes("_ ") ||
              missesCount >= maxMisses
            }
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
}
