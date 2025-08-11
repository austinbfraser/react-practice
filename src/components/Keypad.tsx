import React from 'react';
import Key from './Key';

interface KeypadProps {
  input: string[];
  setInput: (input: string[]) => void;
}

const Keypad = ({ input, setInput }: KeypadProps) => {
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

  const handleClickOperators = function (value: string) {
    if (input.length === 0 || operators.includes(input[input.length - 1]))
      return;
    else setInput([...input, value]);
  };

  const handleClickDel = function () {
    if (input.length > 0) {
      if (input[input.length - 1].length === 1)
        setInput(input.slice(0, input.length - 1));
      else {
        const newInput = [...input];
        let last = newInput[newInput.length - 1];
        last = last.slice(0, last.length - 1);
        newInput[newInput.length - 1] = last;
        setInput(newInput);
      }
    }
  };

  const handleClickReset = function () {
    setInput([]);
  };

  const handleClickEquals = function () {
    if (input.length === 0) return;
    const inputCopy = [...input];
    if (operators.includes(inputCopy[inputCopy.length - 1])) inputCopy.pop();
    const joined = inputCopy.join(' ');
    const xToStar = joined.replaceAll('x', '*');
    const evaluated = eval(xToStar);
    console.log('evaluated: ', evaluated);
    setInput([evaluated]);
  };

  return (
    <div className="keypadContainer">
      <div className="keypad">
        {values.map((value) => (
          <Key
            key={`key${value}`}
            value={value}
            handleClickNums={handleClickNums}
            handleClickOperators={handleClickOperators}
            handleClickDel={handleClickDel}
            handleClickReset={handleClickReset}
            handleClickEquals={handleClickEquals}
          />
        ))}
      </div>
    </div>
  );
};

export default Keypad;
