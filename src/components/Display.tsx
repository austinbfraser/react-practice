import React from 'react';

interface DisplayProps {
  display: string | null
}

const Display = ({ display }: DisplayProps) => {
  return (
    <div className='display'>{display !== null ? display : '0'}</div>
  )
}

export default Display