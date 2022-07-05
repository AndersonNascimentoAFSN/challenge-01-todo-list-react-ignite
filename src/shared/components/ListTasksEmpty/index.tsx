import styles from './styles.module.css';
import clipboard from '../../../assets/Clipboard.svg';

export function ListTasksEmpty() {
  return (
    <div className={styles.listTaskEmpty}>
      <img src={clipboard} alt="Imagem de um bloco de notas"/>
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  )
}
