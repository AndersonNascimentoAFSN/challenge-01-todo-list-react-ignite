import { Task } from '../';
import styles from './styles.module.css';

interface ITasksProps {
  tasks: {
    id: string;
    value: string;
    isComplete: boolean;
  }[];
  handleTaskCompleted: (id: string) => void;
  delTask: (id: string) => void;
}

export function Tasks({ tasks, handleTaskCompleted, delTask }: ITasksProps) {
  return (
    <div className={styles.wrapperTask}>
      {tasks.map(({ id, value, isComplete }) => (
        <Task
          key={id}
          id={id}
          value={value}
          isComplete={isComplete}
          handleTaskCompleted={handleTaskCompleted}
          delTask={delTask}
        />
      ))}
    </div>
  );
}
