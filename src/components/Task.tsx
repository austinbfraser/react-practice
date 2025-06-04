import type { TaskIntf } from "../interfaces/todo.interface"

interface TaskProps {
  task: TaskIntf
}

const Task = (props: TaskProps) => {
  const { task } = props;

  return (
    <div className="task">
      <p>{task.name}</p>
    </div>
  )
}

export default Task