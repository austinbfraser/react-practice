import type { TaskIntf } from '../interfaces/todo.interface';
import { POKEMON_IMAGES_BASE_URL } from '../constants';

interface TaskProps {
  task: TaskIntf;
  deleteTask: (id: string) => void;
  completeTask: (id: string) => void;
}

const Task = (props: TaskProps) => {
  const { task, deleteTask, completeTask } = props;
  const imageUrl: string = `${POKEMON_IMAGES_BASE_URL}/${task.pokedexNumber}.png`;

  return (
    <div className="task">
      <div className="imageContainer">
        <img className="image" src={imageUrl}></img>
      </div>
      <div>
        <p>{task.name}</p>
        <label>
          <input type="checkbox" onChange={() => completeTask(task.id)}></input>
          Completed
        </label>
        <div>
          <button className="deleteButton" onClick={() => deleteTask(task.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
