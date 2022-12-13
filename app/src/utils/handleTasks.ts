import { storageHandler } from './localStorage';

const filterOptions = ['Hoje', 'Semana', 'Mês', 'Ano', 'Atrasadas'];

export function handleTasks(filter: string): string {
  let url: string;
  const id = storageHandler.getUserId();
  const baseURL = '/tasks';
  switch (filter) {
    case filterOptions[0]:
      url = `${baseURL}/day/${id}`;
      break;
    case filterOptions[1]:
      url = `${baseURL}/week/${id}`;
      break;
    case filterOptions[2]:
      url = `${baseURL}/month/${id}`;
      break;
    case filterOptions[3]:
      url = `${baseURL}/year/${id}`;
      break;
    case filterOptions[4]:
      url = `${baseURL}/late/${id}`;
      break;
    default:
      url = baseURL;
      break;
  }
  return url;
}
