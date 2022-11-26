import { AxiosError } from 'axios';
import { toast } from '../components/ToastManager';
import { Login } from '../interfaces/api/Login';
import { setupToastContainerCss } from './setupToastContainerCss';
import { toastConfig } from '../utils/constants';

export function handleLoginResponse(
  response: Login | AxiosError | null,
  theme: string,
): void {
  setupToastContainerCss();
  if (!response) {
    return toast.warn({
      title: toastConfig.messages.err.title,
      content: toastConfig.messages.err.content,
      duration: toastConfig.duration,
      theme,
    });
  }
  if (response.message) {
    return toast.error({
      title: toastConfig.messages.warn.title,
      content: response.message,
      duration: toastConfig.duration,
      theme,
    });
  }
  return toast.sucess({
    title: toastConfig.messages.success.title,
    content: toastConfig.messages.success.content,
    duration: toastConfig.duration,
    theme,
  });
}
