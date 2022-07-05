import { Task } from '../';
import { ListTasksEmpty } from '../ListTasksEmpty';
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
      {tasks.length !== 0 ? tasks.map(({ id, value, isComplete }) => (
        <Task
          key={id}
          id={id}
          value={value}
          isComplete={isComplete}
          handleTaskCompleted={handleTaskCompleted}
          delTask={delTask}
        />
      )): <ListTasksEmpty />}
    </div>
  );
}
