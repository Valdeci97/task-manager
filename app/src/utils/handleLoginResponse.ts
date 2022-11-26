import { toast } from '../components/ToastManager';
import { Login } from '../interfaces/api/Login';
import { toastConfig } from '../utils/constants';
import { storageHandler } from '../utils/localStorage';

export function handleLoginResponse(
  response: Login | null,
  theme: string,
): void {
  if (!response) {
    return toast.warn({
      title: toastConfig.messages.login.err.title,
      content: toastConfig.messages.login.err.content,
      duration: toastConfig.duration,
      theme,
    });
  }
  if (response.message) {
    return toast.error({
      title: toastConfig.messages.login.warn.title,
      content: response.message,
      duration: toastConfig.duration,
      theme,
    });
  }
  storageHandler.setByKey('token', response.login.token);
  return toast.success({
    title: toastConfig.messages.login.success.title,
    content: toastConfig.messages.login.success.content,
    duration: toastConfig.duration,
    theme,
  });
}
