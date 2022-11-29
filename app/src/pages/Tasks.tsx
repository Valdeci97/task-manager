import { useQuery } from '@tanstack/react-query';
import { UserTasks } from '../interfaces/Tasks';
import { getTasks } from '../utils/api';
import { STSK } from '../styles/tasks';

import Header from '../components/Header';
import TaskCard from '../components/TaskCard';
import TaskMenu from '../components/TaskMenu';

const token =
  'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODNmMTU2MDA1ZjBlZDZhMThlNjczYSIsImlhdCI6MTY2OTY2NDMwNiwiZXhwIjoxNjY5NzUwNzA2fQ.5oxCnhYgdYE9HZgW7WlgAh1I-70rEBpGgGMzXB5x2p0bdCNrnHV0qqtVP4T98TFVpuhsv5WHBILel0Om8g3a-g';

export default function Tasks() {
  const { data: tasks, isFetching } = useQuery<UserTasks[]>({
    queryKey: ['tasks'],
    queryFn: () => getTasks(token),
    staleTime: 1000 * 5 * 60, // 5 minutes
  });

  return (
    <>
      <Header />
      <TaskMenu />
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
