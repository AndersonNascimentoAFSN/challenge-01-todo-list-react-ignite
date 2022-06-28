import { Header, TaskCount } from '../../shared/components';
import { Input } from '../../shared/components';
import { Button } from '../../shared/components';
import styles from './styles.module.css';

export function Home() {
  return (
    <main>
      <Header />
      <div className={styles.wrapper}>
        <Input type="text" placeholder="Adicione uma nova tarefa" />
        <Button title="Criar" />
      </div>

      <div className={styles.wrapperTaskCount}>
        <TaskCount title='Tarefas criadas' value={0}/>
        <TaskCount title='Concluídas' value={0}/>
      </div>
    </main>
  );
}
