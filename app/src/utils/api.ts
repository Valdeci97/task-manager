import axios from 'axios';
import { HttpException, Login } from '../interfaces/api/Users';
import { TaskRequestBody, UserTasks, UserTasksById } from '../interfaces/Tasks';
import { CreateUser, UserLogin } from '../interfaces/User';

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

export async function login({
  email,
  password,
}: UserLogin): Promise<Login | null> {
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

export async function createUser({
  name,
  email,
  password,
}: CreateUser): Promise<HttpException | null> {
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
  await API.delete(url, { headers: { authorization: token } });
}

export async function createTask(
  task: TaskRequestBody,
  token: string,
  url: string,
): Promise<UserTasksById> {
  const response = await API.post(
    url,
    { ...task },
    { headers: { authorization: token, contentType } },
  );
  return response.data;
}

export async function updateTask(
  task: TaskRequestBody,
  token: string,
  url: string,
): Promise<UserTasksById> {
  const response = await API.put(
    url,
    { ...task },
    { headers: { authorization: token } },
  );
  return response.data;
}
