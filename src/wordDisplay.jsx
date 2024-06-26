import React from "react";


export default function WordDisplay(props) {
    return <h2 className="guessed-word-style">{props.displayLetters}</h2>;
}
