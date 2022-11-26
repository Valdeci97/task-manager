import { CreateToast } from '../interfaces/Toast';
import { toastConfig } from './constants';

export function validateLogin(
  email: string,
  password: string,
  theme: string,
): CreateToast | null {
  const matcher =
    /^([\w-.]+)@((\[[\d]{1,3}\.)|(([\w]+\.)+))([a-zA-Z]{2,4}|[\d]{1,3})$/;
  const MIN_LENGTH = 8;
  if (!email || !password) {
    return {
      title: toastConfig.validateLogin.emptyFields.title,
      content: toastConfig.validateLogin.emptyFields.content,
      duration: toastConfig.duration,
      theme,
    };
  }
  if (!matcher.test(email)) {
    return {
      title: toastConfig.validateLogin.isNotEmail.title,
      content: toastConfig.validateLogin.isNotEmail.content,
      duration: toastConfig.duration,
      theme,
    };
  }
  if (password.length < MIN_LENGTH) {
    return {
      title: toastConfig.validateLogin.minLength.title,
      content: toastConfig.validateLogin.minLength.content,
      duration: toastConfig.duration,
      theme,
    };
  }
  return null;
}
