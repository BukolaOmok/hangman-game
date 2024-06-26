import React from "react";

export default function WordDisplay(props) {
  const wordToGuess = props.selectedWord
  .split("")
  .map((letter) => (props.guessedLetters.includes(letter) ? letter : "_ "))
  .join("");
  return <h2 className="guessed-word-style">{wordToGuess}</h2>;
}
