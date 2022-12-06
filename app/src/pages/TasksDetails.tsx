import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Label from '../components/Label';
import Select from '../components/Select';
import { toast } from '../components/ToastManager';
import { AppCtx } from '../context/Provider';
import { UserTasks } from '../interfaces/Tasks';
import { getTaskById } from '../utils/api';
import { storageHandler } from '../utils/localStorage';

export default function TasksDetails() {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  function handleInitialState(task: UserTasks): void {
    setTitle(task.title);
    setDescription(task.description);
    setCategory(task.category);
  }

  const { id } = useParams();
  const url = `/tasks/${id}`;

  const { theme } = useContext(AppCtx);

  const token = storageHandler.getByKey('token') || '';

  useEffect(() => {
    getTaskById(token, url)
      .then((res) => handleInitialState(res))
      .catch((err) =>
        toast.error({
          title: 'Tarefa não encontrada',
          content: err.message,
          duration: 4500,
          theme: storageHandler.getByKey('theme') || 'light',
        }),
      );
  }, [token, url]);

  return (
    <>
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
        values={['Lazer', 'teste']}
        id={'select-category'}
        selectedValue={category}
        handleChange={setCategory}
      />
      <Select
        values={['teste 3', 'teste 4']}
        id={'task-status'}
        selectedValue={'teste 4'}
        handleChange={setCategory}
      />
    </>
  );
}
