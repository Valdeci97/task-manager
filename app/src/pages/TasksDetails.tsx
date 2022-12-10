import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DateTimeInput from '../components/DateTimeInput';
import Header from '../components/Header';

import Label from '../components/Label';
import Select from '../components/Select';
import TextArea from '../components/TextArea';
import { toast } from '../components/ToastManager';
import { AppCtx } from '../context/Provider';
import { UserTasks } from '../interfaces/Tasks';
import { SHARED } from '../styles/shared';
import { getTaskById, updateTask } from '../utils/api';
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
  const { theme, navigate } = useContext(AppCtx);
  const { id } = useParams();
  const url = `/tasks/${id}`;

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

  async function handleClick() {
    const when = `${date}T${hour}.000`;
    const finished = done === 'feito';
    const token = storageHandler.getByKey('token') || '';
    const task = {
      userId: storageHandler.getByKey('userId') || '',
      title,
      description,
      category,
      done: finished,
      when,
    };
    updateTask(task, token, url)
      .then(() => navigate('/tasks'))
      .catch((err) =>
        toast.error({
          title: toastConfig.messages.tasks.updateErr.title,
          content: err.response.data.message,
          duration: toastConfig.duration,
          theme,
        }),
      );
  }

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
          id={'hour-input'}
          text={'Hora'}
        />
        <SHARED.Button type="button" onClick={handleClick} theme={theme}>
          Finalizar
        </SHARED.Button>
      </SHARED.Form>
    </>
  );
}
