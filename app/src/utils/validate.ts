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
      title: toastConfig.validate.emptyFields.title,
      content: toastConfig.validate.emptyFields.content,
      duration: toastConfig.duration,
      theme,
    };
  }
  if (!matcher.test(email)) {
    return {
      title: toastConfig.validate.isNotEmail.title,
      content: toastConfig.validate.isNotEmail.content,
      duration: toastConfig.duration,
      theme,
    };
  }
  if (password.length < MIN_LENGTH) {
    return {
      title: toastConfig.validate.passMinLength.title,
      content: toastConfig.validate.passMinLength.content,
      duration: toastConfig.duration,
      theme,
    };
  }
  return null;
}

export function validateUser(
  name: string,
  email: string,
  password: string,
  theme: string,
): CreateToast | null {
  if (!name) {
    return {
      title: toastConfig.validate.emptyFields.title,
      content: toastConfig.validate.emptyFields.content,
      duration: toastConfig.duration,
      theme,
    };
  }
  if (name.length < 3) {
    return {
      title: toastConfig.validate.nameMinLength.title,
      content: toastConfig.validate.nameMinLength.content,
      duration: toastConfig.duration,
      theme,
    };
  }
  const validate = validateLogin(email, password, theme);
  if (validate) return validate;
  return null;
}
