import React from 'react';

interface KeyProps {
  value: string
  handleClickMath: (input: string) => void;
  handleClickDel: () => void;
  handleClickReset: () => void;
}

const Key = ({ value, handleClickMath, handleClickDel, handleClickReset }: KeyProps) => {
  if (value === 'RESET') return <button className='key' onClick={handleClickReset} id='reset'>{value}</button>
  else if (value === '=') return <button className='key' id='equals'>{value}</button>
  else if (value === 'DEL') return <button className='key' onClick={handleClickDel} id='delete'>{value}</button>
  return (
    <button className='key' onClick={() => handleClickMath(value)}>{value}</button>
  )
}

export default Key