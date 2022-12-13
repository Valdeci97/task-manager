import { toast } from '../components/ToastManager';
import { Login } from '../interfaces/api/Users';
import { UserLogin } from '../interfaces/User';
import { login } from './api';
import { toastConfig } from './constants';
import { storageHandler } from './localStorage';
import { validateLogin } from './validate';

function handleLoginResponse(
  response: Login | null,
  theme: string,
): NodeJS.Timeout | void {
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
      title: toastConfig.messages.login.err.title,
      content: response.message,
      duration: toastConfig.duration,
      theme,
    });
  }
  storageHandler.setupUser({
    token: `Bearer ${response.login.token}`,
    id: response.login.user.id,
  });
  toast.success({
    title: toastConfig.messages.login.success.title,
    content: toastConfig.messages.login.success.content,
    duration: toastConfig.duration,
    theme,
  });
  return setTimeout(() => {
    return window.location.assign(`${window.location.origin}/tasks`);
  }, 4000);
}

export async function handleLogin(
  user: UserLogin,
  theme: string,
): Promise<void> {
  const toastInfo = validateLogin(user, theme);
  if (toastInfo) return toast.warn({ ...toastInfo });
  const response = await login(user);
  handleLoginResponse(response, theme);
}
