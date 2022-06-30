import { Trash } from 'phosphor-react';
import styles from './styles.module.css';

interface ITask {
  id: string;
  label: string;
  value: string;
  name: string;
  isComplete: boolean;
}

interface ITaskProps {
  id: string;
  label: string;
  value: string;
  name: string;
  isComplete: boolean;
  handleTaskCompleted: (id: string) => void;
  delTask: (id: string) => void;
}

export function Task({
  id,
  label,
  value,
  name,
  isComplete,
  handleTaskCompleted,
  delTask
}: ITaskProps) {
  function handleChangeTask() {
    handleTaskCompleted(id);
  }

  function handleDelTask() {
    delTask(id);
  }

  return (
    <div className={styles.task}>
      <div className={styles.taskInput}>
        <input
          type="checkbox"
          id={id}
          name={name}
          value={value}
          onChange={handleChangeTask}
          checked={isComplete}
        />
        <label
          htmlFor={id}
          className={isComplete ? styles.taskIsCompleted : ''}
        >
          {label}
        </label>
      </div>
      <button className={styles.taskDelete} onClick={handleDelTask}>
        <Trash size={24} />
      </button>
    </div>
  );
}
