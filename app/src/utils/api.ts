import axios from 'axios';
import { Login } from '../interfaces/api/Login';

const URL = 'https://todo-api-dev.onrender.com';

const API = axios.create({
  baseURL: URL,
  timeout: 1000 * 5,
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
