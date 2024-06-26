import "./App.css";
import React from "react"
import letterData from "./letterData";
import randomWordData from "./randomWordData";
// import HangmanGame from "./Hangman.jsx";

export default function App() {
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
        updateMissesCount(guessedLetters);
      }
    }
  };

  const updateMissesCount = (guessedLetters) => {
    return guessedLetters.length;
  };

  const winOrLose = () => {
    if (guessedLetters.length >= maxMisses) {
      return (
        <div>
          You lose! Too many misses
          <br />
          <br />
          The word is: {selectedWord}
        </div>
      );
    } else if (
      guessedLetters.length < maxMisses &&
      !wordToGuess.includes("_ ")
    ) {
      return "You win!";
    } else if (
      guessedLetters.length < maxMisses &&
      wordToGuess.includes("_ ")
    ) {
      return;
    }
  };

  const handleNewGame = () => {
    const newSelectedWord = pickRandomWord(randomWordData)
    setSelectedWord(newSelectedWord)
    setWordToGuess(splitWordToGuess.map(() => "_ "))
    setGuessedLetters([])
    updateMissesCount()
  }

  return (
    <div className="group-content">
      <h1 className="heading-style">Bukola Hangman Game</h1>
      <h2 className="guessed-word-style">{wordToGuess}</h2>
      <p>{winOrLose()}</p>
      <p className="misses-count-style">
        number of misses: {updateMissesCount(guessedLetters)}
      </p>

      <div className="group-letter">
        {letterData.map((letter) => (
          <button
            key={letter}
            className="letter"
            onClick={handleGuesses(letter)}
            disabled={
              guessedLetters.includes(letter) ||
              !wordToGuess.includes("_ ") ||
              guessedLetters.length >= maxMisses
            }
          >
            {letter}
          </button>
        ))}
      </div>
      <button className = "new-game-button" onClick={handleNewGame}>New Game</button>
    </div>
  );
}


