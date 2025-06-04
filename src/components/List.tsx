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
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setInput('');
  }

  function deleteTask(id: string) {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log
  }

  function completeTask(id: string) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        } else return task;
      })
    );
  }

  return (
    <div>
      <h2>Add Task:</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => {setInput(e.target.value)}}
      ></input>
      <button onClick={() => addTask(input)}>Add</button>
      <h2>Tasks:</h2>
      {tasks.map((task) => (
        <Task key={`${task.name}-key`} task={task} deleteTask={deleteTask} completeTask={completeTask} />
      ))}
    </div>
  );
};

export default List;
