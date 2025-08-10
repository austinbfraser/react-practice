import './App.css';
import { useState } from 'react';
import Keypad from './components/Keypad';
import Display from './components/Display';

function App() {
  const [input, setInput] = useState<string[]>([]);
  const [display, setDisplay] = useState<string | null>(null);

  return (
    <div className="mainContainer">
      <div className="narrowContainer">
        <Display display={display}/>
        <Keypad input={input} setInput={setInput} setDisplay={setDisplay}/>
      </div>
    </div>
  );
}

export default App;
