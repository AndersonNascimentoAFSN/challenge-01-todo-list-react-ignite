import styles from './styles.module.css';
import logo from '../../../assets/Logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="logo do Todo do ignite" />
    </header>
  );
}
