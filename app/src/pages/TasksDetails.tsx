import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DateTimeInput from '../components/DateTimeInput';
import Header from '../components/Header';

import Label from '../components/Label';
import Select from '../components/Select';
import { toast } from '../components/ToastManager';
import { AppCtx } from '../context/Provider';
import { UserTasks } from '../interfaces/Tasks';
import { getTaskById } from '../utils/api';
import { tasksConfig, toastConfig } from '../utils/constants';
import { storageHandler } from '../utils/localStorage';

const token = storageHandler.getByKey('token') || '';

export default function TasksDetails() {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [done, setDone] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [hour, setHour] = useState<string>('');

  function handleInitialState(task: UserTasks): void {
    const [formatedDate, taskHour] = task.when.split('T');
    const [formatedHour] = taskHour.split('.');
    setTitle(task.title);
    setDescription(task.description);
    setCategory(task.category);
    setDone(task.done ? 'Feito' : 'A fazer');
    setDate(formatedDate);
    setHour(formatedHour);
  }

  const { id } = useParams();
  const url = `/tasks/${id}`;

  const { theme } = useContext(AppCtx);

  useEffect(() => {
    getTaskById(token, url)
      .then((res) => handleInitialState(res))
      .catch((err) =>
        toast.error({
          title: toastConfig.messages.tasks.notFound.err.title,
          content: err.response.data.message,
          duration: toastConfig.duration,
          theme: storageHandler.getByKey('theme') || 'light',
        }),
      );
  }, [url]);

  return (
    <>
      <Header />
      <Label
        text={'Título'}
        id={'title-input'}
        value={title}
        handleChange={setTitle}
        theme={theme}
        placeholder={'Seu título aqui'}
      />
      <Label
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
      />
      <Select
        values={['A fazer', 'Feito']}
        id={'task-status'}
        selectedValue={done}
        handleChange={setDone}
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
        id={'hour-input'}
        text={'Hora'}
      />
    </>
  );
}
