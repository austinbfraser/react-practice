import React from 'react';

interface KeyProps {
  value: string | number
}

const Key = ({ value }: KeyProps) => {
  if (value === 'RESET') return <button className='key' id='reset'>{value}</button>
  else if (value === '=') return <button className='key' id='equals'>{value}</button>
  else if (value === 'DEL') return <button className='key' id='delete'>{value}</button>
  return (
    <button className='key'>{value}</button>
  )
}

export default Key