import { toast } from '../components/ToastManager';
import { HttpException } from '../interfaces/api/Users';
import { CreateUser } from '../interfaces/User';
import { createUser } from './api';
import { toastConfig } from './constants';
import { validateUser } from './validate';

function handleCreateUserResponse(
  response: HttpException | null,
  theme: string,
): void {
  if (!response) {
    return toast.warn({
      title: toastConfig.messages.sleepApi.warn.title,
      content: toastConfig.messages.sleepApi.warn.content,
      duration: toastConfig.duration,
      theme,
    });
  }
  if (response.message) {
    return toast.error({
      title: toastConfig.messages.createUser.err.title,
      content: response.message,
      duration: toastConfig.duration,
      theme,
    });
  }
  return toast.success({
    title: toastConfig.messages.createUser.success.title,
    content: toastConfig.messages.createUser.success.content,
    duration: toastConfig.duration,
    theme,
  });
}

export async function handleCreateUser(
  user: CreateUser,
  theme: string,
): Promise<void> {
  const toastInfo = validateUser(user, theme);
  if (toastInfo) return toast.warn({ ...toastInfo });
  const response = await createUser(user);
  handleCreateUserResponse(response, theme);
}
