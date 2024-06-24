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
  };

  const revealGuessedLetters = () => {
    const revealedWord = wordToGuess.map((letter, index) => {
      if (guessedLetters.includes(letter)) {
        return letter;
      } else {
        return "_";
      }
    });
    setWordToGuess(revealedWord);
  };



  return (
    <div className="group-content">
      <h1 className="heading-style">Bukola Hangman Game</h1>
      <h3 className="guessed-word-style">{wordToGuess}</h3>
      <p className="misses-count-style">number of misses:</p>

      <div className="group-letter">
        <div className="first-ten">
          <button className="letter">a</button>
          <button className="letter">b</button>
          <button className="letter">c</button>
          <button className="letter">d</button>
          <button className="letter">e</button>
          <button className="letter">f</button>
          <button className="letter">g</button>
          <button className="letter">h</button>
          <button className="letter">i</button>
          <button className="letter">j</button>
        </div>

        <div className="second-ten">
          <button className="letter">k</button>
          <button className="letter">l</button>
          <button className="letter">m</button>
          <button className="letter">n</button>
          <button className="letter">o</button>
          <button className="letter">p</button>
          <button className="letter">q</button>
          <button className="letter">r</button>
          <button className="letter">s</button>
          <button className="letter">t</button>
        </div>

        <div className="last-six">
          <button className="letter">u</button>
          <button className="letter">v</button>
          <button className="letter">w</button>
          <button className="letter">x</button>
          <button className="letter">y</button>
          <button className="letter">z</button>
        </div>
      </div>
    </div>
  );
}
