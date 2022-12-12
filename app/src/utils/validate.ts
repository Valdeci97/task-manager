import { TaskRequestBody } from '../interfaces/Tasks';
import { CreateToast } from '../interfaces/Toast';
import { CreateUser, UserLogin } from '../interfaces/User';
import { tasksConfig, toastConfig } from './constants';

type Validation = CreateToast | undefined;
type FieldMessage = { title: string; content: string };
const LIGHT = 'light';
const { duration } = toastConfig;

const emptyFieldsToastConfig = {
  title: toastConfig.validate.emptyFields.title,
  content: toastConfig.validate.emptyFields.content,
  duration,
};

const categoryFieldToastConfig = {
  title: toastConfig.validate.category.title,
  content: toastConfig.validate.category.content,
  duration,
};

const isoDateFieldToastConfig = {
  title: toastConfig.validate.isoDate.title,
  content: toastConfig.validate.isoDate.content,
  duration,
};

const nameMinLengthToastConfig = {
  title: toastConfig.validate.nameMinLength.title,
  content: toastConfig.validate.nameMinLength.content,
};

const passMinLengthToastConfig = {
  title: toastConfig.validate.passMinLength.title,
  content: toastConfig.validate.passMinLength.content,
};

function validateEmptyField(field: string, theme = LIGHT): Validation {
  if (field.length === 0) {
    return {
      ...emptyFieldsToastConfig,
      theme,
    };
  }
}

function validateEmail(email: string, theme = LIGHT): Validation {
  const emailMatcher =
    /^([\w-.]+)@((\[[\d]{1,3}\.)|(([\w]+\.)+))([a-zA-Z]{2,4}|[\d]{1,3})$/;
  if (!emailMatcher.test(email)) {
    return {
      title: toastConfig.validate.isNotEmail.title,
      content: toastConfig.validate.isNotEmail.content,
      duration,
      theme,
    };
  }
}

function validateFieldByMinLength(
  field: string,
  minLength: number,
  fieldMessage: FieldMessage,
  theme: string = LIGHT,
): Validation {
  if (field.length < minLength) {
    return { ...fieldMessage, duration, theme };
  }
}

function validateTaskCategory(filter: string, theme = LIGHT): Validation {
  const exists = tasksConfig.categories.find((category) => category === filter);
  if (!exists) {
    return { ...categoryFieldToastConfig, theme };
  }
}

function validateIsoDate(date: string, theme = LIGHT): Validation {
  const isoMatcher = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
  if (!isoMatcher.test(date)) {
    return { ...isoDateFieldToastConfig, theme };
  }
}

export function validateLogin(user: UserLogin, theme: string): Validation {
  const validations = [
    validateEmail(user.email, theme),
    validateEmptyField(user.password, theme),
    validateFieldByMinLength(user.password, 8, passMinLengthToastConfig, theme),
  ];
  const result = validations.find((validation) => validation);
  return result;
}

export function validateUser(user: CreateUser, theme: string): Validation {
  const validations = [
    validateEmptyField(user.name, theme),
    validateFieldByMinLength(user.name, 3, nameMinLengthToastConfig, theme),
    validateEmail(user.email, theme),
    validateEmptyField(user.password, theme),
    validateFieldByMinLength(user.password, 8, passMinLengthToastConfig, theme),
  ];
  const result = validations.find((validation) => validation);
  return result;
}

export function validateTask(task: TaskRequestBody, theme: string): Validation {
  const validations = [
    validateEmptyField(task.title, theme),
    validateEmptyField(task.description, theme),
    validateTaskCategory(task.category, theme),
    validateIsoDate(task.when, theme),
  ];
  const result = validations.find((validation) => validation);
  return result;
}
