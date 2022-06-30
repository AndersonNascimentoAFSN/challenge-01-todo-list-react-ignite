import { ButtonHTMLAttributes } from 'react';
import { PlusCircle } from 'phosphor-react';
import styles from './styles.module.css';

interface ITask {
  id: string;
  label: string;
  value: string;
  name: string;
  isComplete: boolean;
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  addTask: (task: ITask) => void;
}

export function Button({ title, addTask, ...props }: IButtonProps) {
  function handleAddTask() {
    addTask({
      id: '',
      label: '',
      value: '',
      name: '',
      isComplete: false,
    });
  }

  return (
    <button className={styles.button} {...props} onClick={handleAddTask}>
      {title}
      <PlusCircle size={16} />
    </button>
  );
}
