import React from 'react';

function Alert({answer, guesses, status}) {
  return (
    <div className={`${status} banner`}>
    { status === 'happy' ? 
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {guesses.length} guesses</strong>.
      </p> :    
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    }
    </div>);
}

export default Alert;
