import React from 'react';
import Row from './Row';
import LastRow from './LastRow';

const Keypad = () => {
  return (
    <div>
      <Row 
        key='row1'
        values={[7,8,9,'del']}/>
      <Row key='row2'/>
      <Row key='row3'/>
      <Row key='row4'/>
      <LastRow />
    </div>
  )
}

export default Keypad