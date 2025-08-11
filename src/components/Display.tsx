// import React from 'react';

interface DisplayProps {
  input: string[];
}

const Display = ({ input }: DisplayProps) => {
  return (
    <div className='display'>{input.length > 0 ? input[input.length - 1] : '0'}</div>
  )
}

export default Display