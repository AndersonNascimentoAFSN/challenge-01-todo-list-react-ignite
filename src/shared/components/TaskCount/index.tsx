import styles from './styles.module.css';

interface ITaskCount {
  title: string;
  value: number;
}

export function TaskCount({ title, value, ...otherProps }: ITaskCount) {
  return (
    <div className={styles.wrapper} {...otherProps}>
      <strong className={styles.title}>{title}</strong>
      <span className={styles.value}>{value}</span>
    </div>
  );
}
