import './App.css';
import Keypad from './components/Keypad';
import Display from './components/Display';

function App() {
  return (
    <div className="mainContainer">
      <div className="narrowContainer">
        <Display />
        <Keypad />
      </div>
    </div>
  );
}

export default App;
