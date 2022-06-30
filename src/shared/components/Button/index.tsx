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
  addTask: () => void;
}

export function Button({ title, addTask, ...props }: IButtonProps) {
  return (
    <button className={styles.button} {...props} onClick={addTask}>
      {title}
      <PlusCircle size={16} />
    </button>
  );
}
