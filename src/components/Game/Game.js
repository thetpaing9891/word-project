import React, { useEffect } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import Guesses from '../Guesses/Guesses';
import { checkGuess } from '../../game-helpers';
import Alert from '../Alert/Alert';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState(undefined);
  console.log(guesses.length)
  useEffect(() => {
      guesses.map((item) => {
        let count = 0;
        const checkedResults = checkGuess(item, answer);
        checkedResults.map((item) => {
          if(item.status === 'correct') {
            count++
          }
        })
        if(count === 5) {
          setStatus('happy')
        }
      })
      if(guesses.length >= 5){
        setStatus('sad')
      }
  },[guesses])
  return <>
  {status && <Alert guesses={guesses} answer={answer} status={status}/>}
  <Guesses guesses={guesses} answer={answer}/>
  <GuessInput isDisable={status !== undefined ? true : false} setGuesses={setGuesses} /></>;
}

export default Game;
