import { ChangeEvent, InputHTMLAttributes } from 'react';
import styles from './styles.module.css';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  addTextTask: (textTask: string) => void;
  value: string;
}

export function Input({ addTextTask, ...props }: IInputProps) {
  function handleAddTextTask(event: ChangeEvent<HTMLInputElement>) {
    addTextTask(event.target.value);
  }

  return (
    <input className={styles.input} onChange={handleAddTextTask} {...props} />
  );
}
