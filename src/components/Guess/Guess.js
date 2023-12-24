import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

function Guess({item, answer}) {
  const checkGuessResult = checkGuess(item, answer)
  return range(1,NUM_OF_GUESSES_ALLOWED).map((index, key) => {
  const {letter, status} = checkGuessResult ? checkGuessResult[key] : {letter: '', status: ''};
  return <span className={`cell ${status}`} key={index}>{letter}</span>})
}

export default Guess;
