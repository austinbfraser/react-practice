import './App.css';
import { useState } from 'react';
import Keypad from './components/Keypad';
import Display from './components/Display';

function App() {
  const [input, setInput] = useState<string[]>([]);

  return (
    <div className="mainContainer">
      <div className="narrowContainer">
        <Display input={input}/>
        <Keypad input={input} setInput={setInput}/>
      </div>
    </div>
  );
}

export default App;
