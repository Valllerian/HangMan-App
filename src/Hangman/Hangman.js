import React, { useState } from "react";
import "./Hangman.css";
import img0 from "../assets/0.jpg";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";

const Hangman = () => {
  const [maxWrong, setMaxWrong] = useState(6)
  const [images, setImages] = useState([img0, img1, img2, img3, img4, img5, img6])
  const [answer, setAnswer] = useState('apple')
  const [currentWrong, setCurrentWrong] = useState(0)
  const [guessed, setGuessed] = useState('')

//   /** guessedWord: show current-state of word:
//     if guessed letters are {a,p,e}, show "app_e" for "apple"
//   */
 const guessedWord = () => {
    // return answer
    //   .split("")
    //   .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  const handleGuess = (evt) => {
    // let ltr = evt.target.value;
    // this.setState(st => ({
    //   guessed: st.guessed.add(ltr),
    //   nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    // }));
  }

  /** generateButtons: return array of letter buttons to render */
  const generateButtons = () => {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <button
        value={ltr}
        onClick={handleGuess}
        disabled={guessed.includes(ltr)}
      >
        {ltr}
      </button>
    ));
  }

  /** render: render game */
 
    return (
      <div className='Hangman'>
        <h1>Hangman</h1>
        <img src={images[currentWrong]} />
        <p className='Hangman-word'>{guessedWord()}</p>
        <p className='Hangman-btns'>{generateButtons()}</p>
      </div>
    );
}

export default Hangman;
