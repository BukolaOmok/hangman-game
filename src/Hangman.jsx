import "./App.css";
import React from "react";
import letterData from "./letterData";

export default function GenerateHangmanDisplayLetters() {
  const handleWordToGuess = () => {
    const actualWord = "apple";
    const hiddenWord = "_ ".repeat(actualWord.length);
    return hiddenWord;
  };

  const [wordToGuess, setWordToGuess] = React.useState(handleWordToGuess());

  const [showGuess, setShowGuess] = React.useState(false);
  const [displayGuessedLetters, setDisplayGuessedLetters] = React.useState([]);
  const [missesount, setMissesCount] = React.useState(0);

  const splitWordToGuess = wordToGuess.split();

  const handleDisplayGuessedLetters = (letter) => {
    if (splitWordToGuess.includes(letter)) {
      setDisplayGuessedLetters([...displayGuessedLetters, letter]);
      handleRevealLetter()
      setDisplayGuessedLetters([])
    }
  };

  const handleRevealLetter = () => {
    if (showGuess) {
      setShowGuess(true);
      for (let i = 0; i < splitWordToGuess; i++) {
        if (displayGuessedLetters.includes(splitWordToGuess[i])) {
          splitWordToGuess[i] = letter;
        } else {
          splitWordToGuess[i] = "_";
        }
      }
    }
  };



  return (
    <div className="group-content">
      <h1 className="heading-style">Bukola Hangman Game</h1>
      <h3 className="guessed-word-style">{wordToGuess}</h3>
      <p className="misses-count-style">number of misses:</p>

      <div className="group-letter">
        <div className="first-ten">
          <button className="letter" onClick={handleDisplayGuessedLetters("a")}>
            a
          </button>
          <button className="letter" onClick={handleDisplayGuessedLetters("b")}>
            b
          </button>
          <button className="letter" onClick={handleDisplayGuessedLetters("c")}>
            c
          </button>
          <button className="letter" onClick={handleDisplayGuessedLetters("d")}>
            d
          </button>
          <button className="letter" onClick={handleDisplayGuessedLetters("e")}>
            e
          </button>
          <button className="letter" onClick={handleDisplayGuessedLetters("f")}>
            f
          </button>
          <button className="letter" onClick={handleDisplayGuessedLetters("g")}>
            g
          </button>
          <button className="letter" onClick={handleDisplayGuessedLetters("h")}>
            h
          </button>
          <button className="letter" onClick={handleDisplayGuessedLetters("i")}>
            i
          </button>
          <button className="letter" onClick={handleDisplayGuessedLetters("j")}>
            j
          </button>
        </div>

        <div className="second-ten">
          <button className="letter" onClick={handleDisplayGuessedLetters("k")}>
            k
          </button>
          <button className="letter" onClick={handleDisplayGuessedLetters("l")}>
            l
          </button>
          <button className="letter" onClick={handleDisplayGuessedLetters("m")}>
            m
          </button>
          <button className="letter" onClick={handleDisplayGuessedLetters("n")}>
            n
          </button>
          <button className="letter" onClick={handleDisplayGuessedLetters("o")}>
            o
          </button>
          <button className="letter" onClick={handleDisplayGuessedLetters("p")}>
            p
          </button>
          <button className="letter" onClick={handleDisplayGuessedLetters("q")}>
            q
          </button>
          <button className="letter" onClick={handleDisplayGuessedLetters("r")}>
            r
          </button>
          <button className="letter" onClick={handleDisplayGuessedLetters("s")}>
            s
          </button>
          <button className="letter" onClick={handleDisplayGuessedLetters("t")}>
            t
          </button>
        </div>

        <div className="last-six">
          <button className="letter" onClick={handleDisplayGuessedLetters("u")}>
            u
          </button>
          <button className="letter" onClick={handleDisplayGuessedLetters("v")}>
            v
          </button>
          <button className="letter" onClick={handleDisplayGuessedLetters("w")}>
            w
          </button>
          <button className="letter" onClick={handleDisplayGuessedLetters("x")}>
            x
          </button>
          <button className="letter" onClick={handleDisplayGuessedLetters("y")}>
            y
          </button>
          <button className="letter" onClick={handleDisplayGuessedLetters("z")}>
            z
          </button>
        </div>
      </div>
    </div>
  );
}
