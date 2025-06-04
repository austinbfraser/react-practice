import type { TaskIntf } from '../interfaces/todo.interface';

interface TaskProps {
  task: TaskIntf;
  deleteTask: (id: string) => void;
  completeTask: (id: string) => void;
}

const Task = (props: TaskProps) => {
  const { task, deleteTask, completeTask } = props;

  return (
    <div className="task">
      <p>{task.name}</p>
      <label>
        <input type="checkbox" onChange={() => completeTask(task.id)}></input>
        Completed
      </label>
      <div>
        <button className="deleteButton" onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Task;
