import { ButtonHTMLAttributes } from 'react';
import { PlusCircle } from 'phosphor-react';
import styles from './styles.module.css';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export function Button({ title, ...props }: IButtonProps) {
  return (
    <button className={styles.button} {...props}>
      {title}
      <PlusCircle size={16} />
    </button>
  );
}
