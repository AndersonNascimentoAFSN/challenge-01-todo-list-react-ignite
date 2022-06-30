import { Task } from '../';
import styles from './styles.module.css';

interface ITask {
  id: string;
  label: string;
  value: string;
  name: string;
  isComplete: boolean;
}

interface ITasksProps {
  tasks: {
    id: string;
    label: string;
    value: string;
    name: string;
    isComplete: boolean;
  }[];
  handleTaskCompleted: (id: string) => void;
  delTask: (id: string) => void;
}

export function Tasks({ tasks, handleTaskCompleted, delTask }: ITasksProps) {
  return (
    <div className={styles.wrapperTask}>
      {tasks.map(({ id, label, name, value, isComplete }) => (
        <Task
          key={id}
          id={id}
          label={label}
          name={name}
          value={value}
          isComplete={isComplete}
          handleTaskCompleted={handleTaskCompleted}
          delTask={delTask}
        />
      ))}
    </div>
  );
}
