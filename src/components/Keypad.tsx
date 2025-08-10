import React from 'react';
import Key from './Key';

const Keypad = () => {
  const values = [7, 8, 9, 'DEL', 4, 5, 6, '+', 1, 2, 3, '-', '.', 0, '/', 'x', 'RESET', '='];
  return (
    <div className='keypadContainer'>
      <div className='keypad'>
        {values.map((value) => (
          <Key key={`key${value}`} value={value} />
        ))}
      </div>

    </div>
  );
};

export default Keypad;
