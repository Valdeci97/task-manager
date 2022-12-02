import { useState, useEffect } from 'react';

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

const filterOptions = ['Todas', 'Hoje', 'Semana', 'Mês', 'Ano', 'Atrasadas'];

const token =
  'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODNmMTU2MDA1ZjBlZDZhMThlNjczYSIsImlhdCI6MTY3MDAwOTk4OSwiZXhwIjoxNjcwMDk2Mzg5fQ.JVEQCgdltL1ORQ5npIC2oDuHkWZfz1n4v_2iG76mtLbB_KypBjVtA874B7pb_wkIp9f5DvEBe3Du-tcbeNW5Ow';

export default function Tasks() {
  const [isActive, setIsActive] = useState<string>(
    storageHandler.getByKey('isActive') || 'Todas',
  );
  const [tasks, setTasks] = useState<UserTasks[] | undefined>([]);
  const [isFetching, setIsFetching] = useState<boolean>(true);

  useEffect(() => {
    setIsFetching(true);
    storageHandler.setByKey('isActive', isActive);
    const url = handleTasks(isActive);
    getTasks(token, url)
      .then((res) => setTasks(res))
      .catch((err) =>
        toast.error({
          title: 'Erro ao carregar tarefas',
          content: err.response.data.message,
          duration: 4500,
          theme: storageHandler.getByKey('theme') || 'light',
        }),
      )
      .finally(() => setIsFetching(false));
  }, [isActive]);

  return (
    <>
      <Header />
      <STM.Container>
        {filterOptions.map((filter, index) => {
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
        {tasks?.map((task) => (
          <STSK.Link key={task.id} href={`/tasks/${task.id}`}>
            <TaskCard {...task} />
          </STSK.Link>
        ))}
      </STSK.Container>
    </>
  );
}
