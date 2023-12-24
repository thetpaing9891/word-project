import React from 'react';

function GuessInput({isDisable, setGuesses}) {
  const [inputValue, setInputValue] = React.useState('');
  const handleSubmit =(e) => {
    e.preventDefault();
    setGuesses( guesses => [...guesses, inputValue.toUpperCase()])
    setInputValue('')
  }
  return <div>
    <form className="guess-input-wrapper" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" minLength={5}
        disabled={isDisable}
        value={inputValue} onChange={e => setInputValue(e.target.value)} type="text" />
    </form>
  </div>;
}

export default GuessInput;
