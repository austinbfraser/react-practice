import './App.css';
import List from './components/List';

function THE_PLAN() {
  /**
   * Component Structure:
   * App -> List -> Task
   *
   *
   * Task functionality:
   * deleteTask
   * completeTask
   *
   * List functionality:
   * addTask
   * }
   */
}

function App() {
  return (
    <div>
      <h1>To-Do List</h1>
      <List />
    </div>
  );
}

export default App;
