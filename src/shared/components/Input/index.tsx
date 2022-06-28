import { InputHTMLAttributes } from 'react';
import styles from './styles.module.css';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: IInputProps) {
  return <input className={styles.input} {...props} />;
}
