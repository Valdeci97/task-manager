import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DateTimeInput from '../components/DateTimeInput';
import Label from '../components/Label';
import Select from '../components/Select';
import Header from '../components/Header';
import TextArea from '../components/TextArea';
import { toast } from '../components/ToastManager';
import { AppCtx } from '../context/Provider';
import { UserTasks } from '../interfaces/Tasks';
import { SHARED } from '../styles/shared';
import { deleteTask, getTaskById, updateTask } from '../utils/api';
import { greetings, tasksConfig, toastConfig } from '../utils/constants';
import { storageHandler } from '../utils/localStorage';

const token = storageHandler.getUserToken();
const userId = storageHandler.getUserId();
const invalid = 'inválido';

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
    const [hours, minutes] = formatedHour.split(':');
    setTitle(task.title);
    setDescription(task.description);
    setCategory(task.category);
    setDone(task.done ? 'Feito' : 'A fazer');
    setDate(formatedDate);
    setHour(`${hours}:${minutes}`);
  }

  async function handleClick(): Promise<void> {
    const when = `${date}T${hour}:00.000Z`;
    const finished = done === 'feito';
    const task = {
      userId,
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

  async function handleDeleteClick(): Promise<void> {
    deleteTask(token, url)
      .then(() => navigate('/tasks'))
      .catch((err) =>
        toast.error({
          title: 'Falha',
          content: err.response.data.message,
          duration: toastConfig.duration,
          theme,
        }),
      );
  }

  useEffect(() => {
    if (token === invalid || userId === invalid) {
      return window.location.assign(`${window.location.origin}/login`);
    }
    getTaskById(token, url)
      .then((res) => handleInitialState(res))
      .catch((err) =>
        toast.error({
          title: toastConfig.messages.tasks.notFound.err.title,
          content: err.response.data.message,
          duration: toastConfig.duration,
          theme: storageHandler.getTheme(),
        }),
      );
  }, [url]);

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
          id={'hour-input'}
          text={'Hora'}
        />
        <SHARED.Button type="button" onClick={handleClick} theme={theme}>
          Finalizar
        </SHARED.Button>
        <SHARED.Button type="button" onClick={handleDeleteClick} theme={theme}>
          Excluir
        </SHARED.Button>
      </SHARED.Form>
    </>
  );
}
