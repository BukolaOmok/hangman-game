import React from "react";
import WordDisplay from "./wordDisplay";

export default function GameStatus(props) {
  if (props.missesCount >= props.maxMisses) {
    return (
      <div>
        You lose! Too many misses.
        <br />
        <br />
        The word was: {props.selectedWord}
      </div>
    );
  } else if (!props.displayLetters.includes("_ ")) {
    return <div>You win!</div>;
  } 
}

