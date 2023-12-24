import React from 'react';
import Guess from '../Guess/Guess';
import { range } from '../../utils';

function Guesses({guesses, answer}) {
  return <div className="guess-results">
    {range(0,5).map((index, key) => <p className='guess' key={key}>
      <Guess key={index} item={guesses[key]} answer={answer}/>
    </p>)}
</div>;
}

export default Guesses;
