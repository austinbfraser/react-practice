import { useState } from 'react';
import type { TaskInterface } from '../src/types';
import Task from './Task';

const List = () => {
  const defaultTask = {
      id: '1',
      name: 'bibo',
      completed: false,
    };
  const [tasks, setTasks] = useState<TaskInterface[]>([defaultTask]);
  const [input, setInput] = useState('');

  function addTask(input: string) {
    const newTask: TaskInterface = {
      id: Date.now().toString(),
      name: input,
      completed: false
    };
    setTasks([...tasks, newTask]);
    setInput('');
  }
  function completeTask(id: string) {
    const updatedTasks: TaskInterface[] = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      } else return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id: string) {
    const updatedTasks: TaskInterface[] = tasks.filter(
      (task) => task.id !== id
    );
    setTasks(updatedTasks);
  }

  return (
    <>
      <h2>Add Task:</h2>
      <input className="textBox" value={input} onChange={(e) => setInput(e.target.value)}></input>
      <button onClick={() => addTask(input)}>Add</button>
      <h2>Tasks:</h2>
      {tasks.length > 0
        ? tasks.map((task: TaskInterface) => {
            return <Task 
              key={task.id} 
              task={task}
              deleteTask={deleteTask}
              completeTask={completeTask} />;
          })
        : null}
    </>
  );
};

export default List;
