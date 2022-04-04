import React, { useState, useEffect } from "react";
import "./Hangman.css";
import img0 from "../assets/0.jpg";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import ENGLISH_WORDS from "./words.js";

const Hangman = () => {
  const [maxWrong, setMaxWrong] = useState(6);
  const [images, setImages] = useState([
    img0,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
  ]);
  const [answer, setAnswer] = useState();
  const [currentWrong, setCurrentWrong] = useState(0);
  const [guessed, setGuessed] = useState([]);
  const [winner, setWinner] = useState(false);

  useEffect(() => {
    setAnswer(ENGLISH_WORDS[Math.floor(Math.random() * ENGLISH_WORDS.length)]);
  }, []);

  //   /** guessedWord: show current-state of word:
  //     if guessed letters are {a,p,e}, show "app_e" for "apple"
  //   */
  const guessedWord = () => {
    return answer
      ? answer.split("").map((ltr) => (guessed.includes(ltr) ? ltr : "_"))
      : null;
  };

  const winCheck = () => {
    let win = answer
      ? answer.split("").map((ltr) => (guessed.includes(ltr) ? ltr : false))
      : false;
    if (win.includes(false)) {
      return false;
    } else {
      return true;
    }
  };

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  const handleGuess = (e) => {
    let ltr = e.target.value;
    console.log(answer);
    if (winCheck() === true) {
      console.log("win");
      setWinner(true);
    }
    if (answer.includes(ltr)) {
      guessed.push(ltr);
    } else {
      guessed.push(ltr);
      setCurrentWrong(currentWrong + 1);
    }
  };

  /** generateButtons: return array of letter buttons to render */
  const generateButtons = () => {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((ltr) => (
      <button
        className="button-letter"
        key={ltr}
        value={ltr}
        onClick={(e) => handleGuess(e)}
        disabled={
          guessed.includes(ltr) || currentWrong === maxWrong || winner === true
        }
      >
        {ltr}
      </button>
    ));
  };

  const restart = () => {
    setAnswer(ENGLISH_WORDS[Math.floor(Math.random() * ENGLISH_WORDS.length)]);
    setGuessed([]);
    setCurrentWrong(0)
    setWinner(false)
  }

  return (
    <div className="Hangman">
      <h1>Hangman</h1>
      <img src={images[currentWrong]} />
      <p className="Hangman-word ">{guessedWord()}</p>
      <p className="Hangman-btns">{generateButtons()}</p>
      <div className="mt-6">
        {" "}
        <button className="p-3 bg-[#ffc107] text-white game"   onClick={(e) => restart(e)}>New Game</button>
      </div>
    </div>
  );
};

export default Hangman;
