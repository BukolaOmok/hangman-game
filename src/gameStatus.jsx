import React from "react";
import wordToGuess from "./wordDisplay";

function GameStatus(props) {
  if (props.missesCount >= props.maxMisses) {
    return (
      <div>
        You lose! Too many misses.
        <br />
        <br />
        The word was: {props.selectedWord}
      </div>
    );
  } else if (!props.wordToGuess.includes("_ ")) {
    return <div>You win!</div>;
  } 
}

export default GameStatus;
