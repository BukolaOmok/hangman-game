import React from "react";
import letterData from "./letterData";

export default function LetterButtons(props) {
  return (
    <div className="group-letter">
      {letterData.map((letter) => (
        <button
          key={letter}
          className="letter"
          onClick={() => props.handleGuess(letter)}
          disabled={
            props.guessedLetters.includes(letter) ||
            props.missesCount >= props.maxMisses
          }
        >
          {letter}
        </button>
      ))}
    </div>
  );
}
