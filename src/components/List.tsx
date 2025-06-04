import { useState } from 'react';
import type { TaskIntf } from '../interfaces/todo.interface';
import Task from './Task';

const List = () => {
  const defaultTask: TaskIntf = {
    id: '999',
    name: 'default task',
    pokedexNumber: 151,
    completed: false,
  };

  const [tasks, setTasks] = useState<TaskIntf[]>([defaultTask]);
  const [input, setInput] = useState<string>('');

  function addTask(input: string) {
    const randomNum: number = Math.floor(Math.random() * (1302 - 1 + 1)) + 1;
    const newTask: TaskIntf = {
      id: Date.now().toString(),
      name: input,
      pokedexNumber: randomNum,
      completed: false
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div>
      <h2>Add Task:</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          console.log(input);
        }}
      ></input>
      <button onClick={addTask(input)}>Add</button>
      <h2>Tasks:</h2>
      {tasks.map((task) => (
        <Task key={Date.now()} task={task} />
      ))}
    </div>
  );
};

export default List;
