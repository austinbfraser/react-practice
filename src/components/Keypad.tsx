import React from 'react';
import Key from './Key';

interface KeypadProps {
  input: string[];
  setInput: (input: string[]) => void;
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

  const operators = ['+', '-', 'x', '/'];

  // const handleClickMath = function(value: string): void {
  //   // handle numeric input
  //   if (input === null) setInput(value);
  //   else {
  //     if (symbols.includes(input[input.length - 1]) && symbols.includes(value)) return;
  //     setInput(input + value);
  //   }
  // };

  // handle numeric input
  const handleClickNums = function (value: string) {
    if (input.length === 0) setInput([value]);
    else {
      const last = input[input.length - 1];
      if (operators.includes(last)) setInput([...input, value]);
      else {
        if (value === '.' && last.includes('.')) return;
        else {
          const newInput = [...input];
          const updated = last + value;
          newInput[newInput.length - 1] = updated;
          setInput(newInput);
        }
      }
    }
  };

  const handleClickDel = function () {
    if (input !== null) {
      if (input.length === 1) setInput([]);
      else setInput(input.slice(0, input.length - 1)); // !!!!!!!! THIS IS BROKEN due to the array state change
    }
  };

  const handleClickReset = function () {
    setInput([]);
    setDisplay(null);
  };

  return (
    <div className="keypadContainer">
      <div className="keypad">
        {values.map((value) => (
          <Key
            key={`key${value}`}
            value={value}
            handleClickNums={handleClickNums}
            handleClickDel={handleClickDel}
            handleClickReset={handleClickReset}
          />
        ))}
      </div>
    </div>
  );
};

export default Keypad;
