import React from 'react';
import Key from './Key';

interface KeypadProps {
  input: string | null;
  setInput: (input: string | null) => void;
  setDisplay: (input: string | null) => void;
}

const Keypad = ({ input, setInput, setDisplay }: KeypadProps) => {
  const values = [
    '7',
    '8',
    '9',
    'DEL',
    '4',
    '5',
    '6',
    '+',
    '1',
    '2',
    '3',
    '-',
    '.',
    '0',
    '/',
    'x',
    'RESET',
    '=',
  ];

  const symbols = ['+', '-', 'x', '/', '.'];

  const handleClickMath = function (value: string): void {
    // handle numeric input
    if (input === null) setInput(value);
    else {
      if (symbols.includes(input[input.length - 1]) && symbols.includes(value)) return;
      setInput(input + value);
    }
  };

  const handleClickDel = function() {
    if (input !== null) {
      if (input.length === 1) setInput(null);
      else setInput(input.slice(0, input.length - 1));
    }
  }

  const handleClickReset = function() {
    setInput(null);
    setDisplay(null);
  }

  return (
    <div className="keypadContainer">
      <div className="keypad">
        {values.map((value) => (
          <Key
            key={`key${value}`}
            value={value}
            handleClickMath={handleClickMath}
            handleClickDel={handleClickDel}
            handleClickReset={handleClickReset}
          />
        ))}
      </div>
    </div>
  );
};

export default Keypad;
