import axios from 'axios';
import { HttpException, Login } from '../interfaces/api/Users';
import { createTask, UserTasks } from '../interfaces/Tasks';

const URL = 'https://todo-api-dev.onrender.com';
const contentType = 'application/json';

export const API = axios.create({
  baseURL: URL,
  timeout: 1000 * 5, // 5 seconds
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
    const response = await API.post(
      '/login',
      { email, password },
      { headers: { contentType } },
    );
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
    const response = await API.post(
      '/users',
      { name, email, password },
      { headers: { contentType } },
    );
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
  const response = await API.get(url, { headers: { authorization: token } });
  return response.data.task;
}

export async function deleteTask(token: string, url: string): Promise<void> {
  try {
    await API.delete(url, { headers: { authorization: token } });
  } catch (err) {
    return AxiosErrorHandler(err);
  }
}

export async function createTask(
  task: createTask,
  token: string,
  url: string,
): Promise<UserTasks> {
  try {
    const response = await API.post(
      url,
      { ...task },
      { headers: { authorization: token, contentType } },
    );
    return response.data;
  } catch (err) {
    return AxiosErrorHandler(err);
  }
}
