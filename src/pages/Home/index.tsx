import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Header, TaskCount, Tasks } from '../../shared/components';
import { Input } from '../../shared/components';
import { Button } from '../../shared/components';
import styles from './styles.module.css';

const tasksDefaultState = [
  {
    id: uuidv4(),
    label:
      'Comprar pão na padaria da esquina que fica próxima de uma casa laranja esverdeada, ou será amarelada?',
    value: 'buyBread',
    name: 'task',
    isComplete: false,
  },
  {
    id: uuidv4(),
    label: 'Comprar café',
    value: 'buyCoffee',
    name: 'task',
    isComplete: false,
  },
];

interface ITask {
  id: string;
  label: string;
  value: string;
  name: string;
  isComplete: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<ITask[]>(tasksDefaultState);
  const [task, setTask] = useState('');

  function handleTaskCompleted(id: string) {
    const newTasks = [...tasks];
    const taskCompleted = newTasks.findIndex((task) => task.id === id);
    newTasks[taskCompleted].isComplete = !newTasks[taskCompleted].isComplete;
    // const taskCompleted = newTasks.filter((task) => task.id === id);

    setTasks(newTasks);
  }

  function handleDelTask(id: string) {
    const tasksWithoutExcluded = tasks.filter((task) => task.id !== id);
    if (id) {
      setTasks(tasksWithoutExcluded);
    }
  }

  function handleAddTask() {
    if (task) {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: uuidv4(), isComplete: false, label: task, value: task, name: task },
      ]);

      setTask('');
    }
  }

  function handleAddTextTask(textTask: string) {
    setTask(textTask);
  }

  const qtyTasks = tasks.length;
  const qtyTasksCompleted = tasks.filter(
    (task) => task.isComplete === true
  ).length;

  console.log(tasks);

  return (
    <main>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.wrapperCreateTask}>
          <Input
            type="text"
            placeholder="Adicione uma nova tarefa"
            addTextTask={handleAddTextTask}
            value={task}
          />
          <Button title="Criar" addTask={handleAddTask} />
        </div>

        <div className={styles.wrapperTaskCount}>
          <TaskCount title="Tarefas criadas" value={qtyTasks} />
          <TaskCount title="Concluídas" value={qtyTasksCompleted} />
        </div>

        <Tasks
          tasks={tasks}
          handleTaskCompleted={handleTaskCompleted}
          delTask={handleDelTask}
        />
      </div>
    </main>
  );
}
