import type { TaskInterface } from '../src/types';

interface TaskProps {
  task: TaskInterface;
  completeTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

const Task = (props: TaskProps) => {
  const { task, completeTask, deleteTask } = props;
  return (
    <div className="task">
      <p>{task.name}</p>
      <button
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        Delete
      </button>
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => {
            completeTask(task.id);
            console.log(task);
          }}
        />
        <label>Completed</label>
      </div>
    </div>
  );
};

export default Task;
