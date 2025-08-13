import './App.css';
import NavBar from './components/NavBar';
import Product from './components/Product';

function App() {
  return (
    <div className="outermostContainer">
      <div className="innerContainer">
        <NavBar />
        <Product />
      </div>
    </div>
  );
}

export default App;
