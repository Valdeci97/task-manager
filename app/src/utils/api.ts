import axios from 'axios';
import { HttpException, Login } from '../interfaces/api/Users';
import { UserTasks } from '../interfaces/Tasks';

const URL = 'https://todo-api-dev.onrender.com';

export const API = axios.create({
  baseURL: URL,
  timeout: 1000 * 5,
  headers: { post: { setContentType: 'application/json' } },
});

function AxiosErrorHandler(err: unknown) {
  if (axios.isAxiosError(err) && err.response) return err.response.data;
  return null;
}

export async function login(
  email: string,
  password: string,
): Promise<Login | null> {
  try {
    const response = await API.post('/login', { email, password });
    return response.data;
  } catch (err) {
    return AxiosErrorHandler(err);
  }
}

export async function createUser(
  name: string,
  email: string,
  password: string,
): Promise<HttpException | null> {
  try {
    const response = await API.post('/users', { name, email, password });
    return response.data;
  } catch (err) {
    return AxiosErrorHandler(err);
  }
}

export async function getTasks(
  token: string,
  url: string,
): Promise<UserTasks[]> {
  const response = await API.get(url, {
    headers: { authorization: token },
  });
  return response.data;
}

export async function getTaskById(
  token: string,
  url: string,
): Promise<UserTasks> {
  try {
    const response = await API.get(url, { headers: { authorization: token } });
    return response.data.task;
  } catch (err) {
    return AxiosErrorHandler(err);
  }
}
