import React from 'react';

interface KeyProps {
  value: string
  handleClickNums: (input: string) => void;
  handleClickOperators: (input: string) => void;
  handleClickDel: () => void;
  handleClickReset: () => void;
}

const Key = ({ value, handleClickNums,handleClickOperators, handleClickDel, handleClickReset }: KeyProps) => {
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
  if (value === 'RESET') return <button className='key' onClick={handleClickReset} id='reset'>{value}</button>
  else if (value === '=') return <button className='key' id='equals'>{value}</button>
  else if (value === 'DEL') return <button className='key' onClick={handleClickDel} id='delete'>{value}</button>
  else if (numbers.includes(value)) return <button className='key' onClick={() => handleClickNums(value)}>{value}</button>
  else return <button className='key' onClick={() => handleClickOperators(value)}>{value}</button> // operators
}

export default Key