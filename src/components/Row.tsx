import React from 'react';
import Key from './Key';

interface RowProps {
  values: (string | number)[]
}

const Row = ({ values }: RowProps) => {
  // const { values } = props;
  return (
    {values.map(value => <Key value={value}/>)}
  )
}

export default Row