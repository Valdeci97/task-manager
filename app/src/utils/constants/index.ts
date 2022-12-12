export const toastConfig = {
  messages: {
    sleepApi: {
      warn: {
        title: 'ERRO!',
        content: 'API fora do ar! Tente novamente em alguns instantes...',
      },
    },
    login: {
      err: { title: 'Falha no login!' },
      success: {
        title: 'Login bem sucedido!',
        content: 'Você será redirecionado em breve.',
      },
    },
    createUser: {
      err: { title: 'Falha ao criar usuário!' },
      success: {
        title: 'Usuário criado!',
        content: 'Você já pode fazer login.',
      },
    },
    tasks: {
      loadingErr: { title: 'Erro ao carregar tarefas' },
      updateErr: { title: 'Falha ao atualizar tarefa' },
      notFound: {
        err: { title: 'Tarefa não encontrada' },
      },
      creatingErr: { title: 'Falha ao criar' },
    },
  },
  duration: 4500,
  validate: {
    emptyFields: {
      title: 'Campo(s) vazio(s)',
      content: 'Preencha todos os campos',
    },
    isNotEmail: {
      title: 'Email inválido',
      content: 'O email deve seguir o padrão "teste@teste.com"',
    },
    passMinLength: {
      title: 'Senha curta',
      content: 'A senha deve ter pelo menos 8 caracteres',
    },
    nameMinLength: {
      title: 'Nome inválido',
      content: 'O nome deve ter pelo menos 3 caracteres',
    },
    category: {
      title: 'Categoria inválida',
      content: 'Escolha uma catagoria válida para a tarefa',
    },
    isoDate: {
      title: 'Data inválida',
      content: 'Verifique se o campo data está preenchido corretamente',
    },
  },
};

export const styleConfig = {
  theme: {
    light: '#F4F7F3',
    dark: '#1B1F22',
  },
  shared: {
    button: {
      light: {
        backgroundColor: '#54c7c9',
      },
      dark: {
        backgroundColor: '#EE7C2F',
      },
    },
  },
};

export const tasksConfig = {
  filterOptions: ['Todas', 'Hoje', 'Semana', 'Mês', 'Ano', 'Atrasadas'],
  categories: [
    'Estudos',
    'Esportes',
    'Compras',
    'Lazer',
    'Exercícios',
    'Alimentação',
    'Viagem',
  ],
};
