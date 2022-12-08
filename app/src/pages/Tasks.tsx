import { useState, useEffect, useContext } from 'react';

import Header from '../components/Header';
import TaskCard from '../components/TaskCard';
import { STSK } from '../styles/tasks';
import { STM } from '../styles/taskMenu';
import { UserTasks } from '../interfaces/Tasks';
import { getTasks } from '../utils/api';
import { handleTasks } from '../utils/handleTasks';
import TaskMenu from '../components/TaskMenu';
import { storageHandler } from '../utils/localStorage';
import { toast } from '../components/ToastManager';
import { AppCtx } from '../context/Provider';
import { tasksConfig, toastConfig } from '../utils/constants';

const token = storageHandler.getByKey('token') || '';

export default function Tasks() {
  const [isActive, setIsActive] = useState<string>(
    storageHandler.getByKey('isActive') || 'Todas',
  );
  const [tasks, setTasks] = useState<UserTasks[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(true);

  const { theme } = useContext(AppCtx);

  useEffect(() => {
    setIsFetching(true);
    storageHandler.setByKey('isActive', isActive);
    const url = handleTasks(isActive);
    getTasks(token, url)
      .then((res) => setTasks(res))
      .catch((err) =>
        toast.error({
          title: toastConfig.messages.tasks.loadingErr.title,
          content: err.response.data.message,
          duration: toastConfig.duration,
          theme: storageHandler.getByKey('theme') || 'light',
        }),
      )
      .finally(() => setIsFetching(false));
  }, [isActive]);

  return (
    <>
      <Header />
      <STM.Container>
        {tasksConfig.filterOptions.map((filter, index) => {
          return (
            <TaskMenu
              isActive={isActive === filter}
              handleClick={setIsActive}
              text={filter}
              key={`${filter}-${index}`}
            />
          );
        })}
      </STM.Container>
      {isFetching ? <span>Carregando...</span> : null}
      <STSK.Container>
        {tasks.map((task) => (
          <STSK.Link key={task.id} href={`/tasks/${task.id}`} theme={theme}>
            <TaskCard {...task} />
          </STSK.Link>
        ))}
      </STSK.Container>
    </>
  );
}
