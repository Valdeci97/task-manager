import { useContext, useEffect, useState } from 'react';
import DateTimeInput from '../components/DateTimeInput';
import Header from '../components/Header';
import Label from '../components/Label';
import Select from '../components/Select';
import TextArea from '../components/TextArea';
import { toast } from '../components/ToastManager';
import { AppCtx } from '../context/Provider';
import { SHARED } from '../styles/shared';
import { createTask } from '../utils/api';
import { greetings, tasksConfig, toastConfig } from '../utils/constants';
import { storageHandler } from '../utils/localStorage';
import { validateTaskRequest } from '../utils/validate';

const token = storageHandler.getUserToken();
const userId = storageHandler.getUserId();
const invalid = 'inválido';

export default function CreateTask() {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [category, setCategory] = useState<string>(tasksConfig.categories[0]);
  const [done, setDone] = useState<string>('A Fazer');
  const [date, setDate] = useState<string>('');
  const [hour, setHour] = useState<string>('00:00');
  const { theme, navigate } = useContext(AppCtx);

  const url = '/tasks';

  useEffect(() => {
    if (token === invalid || userId === invalid) {
      return window.location.assign(`${window.location.origin}/login`);
    }
  }, []);

  async function handleClick(): Promise<void> {
    const when = `${date}T${hour}:00.000Z`;
    const finished = done === 'Feito';
    const task = {
      userId,
      title,
      description,
      category,
      done: finished,
      when,
    };
    const invalid = validateTaskRequest(task, theme);
    if (invalid) return toast.warn({ ...invalid });
    createTask(task, token, url)
      .then(() => navigate(url))
      .catch((err) =>
        toast.error({
          title: toastConfig.messages.tasks.creatingErr.title,
          content: err.response.data.message,
          duration: toastConfig.duration,
          theme,
        }),
      );
  }

  return (
    <>
      <Header text={greetings} />
      <SHARED.Form>
        <Label
          text={'Título'}
          id={'title-input'}
          value={title}
          handleChange={setTitle}
          theme={theme}
          placeholder={'Seu título aqui'}
        />
        <TextArea
          text={'Descrição'}
          id={'description-input'}
          value={description}
          handleChange={setDescription}
          theme={theme}
          placeholder={'descrição da tarefa'}
        />
        <Select
          values={tasksConfig.categories}
          id={'select-category'}
          selectedValue={category}
          handleChange={setCategory}
          text={'Categoria'}
          theme={theme}
        />
        <Select
          values={['A fazer', 'Feito']}
          id={'task-status'}
          selectedValue={done}
          handleChange={setDone}
          text={'Condição'}
          theme={theme}
        />
        <DateTimeInput
          type={'date'}
          value={date}
          handleChange={setDate}
          id={'date-input'}
          text={'Data'}
        />
        <DateTimeInput
          type={'time'}
          value={hour}
          handleChange={setHour}
          id={'time-input'}
          text={'Hora'}
        />
        <SHARED.Button type="button" onClick={handleClick} theme={theme}>
          Criar
        </SHARED.Button>
      </SHARED.Form>
    </>
  );
}
