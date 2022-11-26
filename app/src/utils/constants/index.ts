export const toastConfig = {
  messages: {
    login: {
      err: {
        title: 'ERRO!',
        content: 'API fora do ar! Tente novamente em alguns instantes...',
      },
      warn: {
        title: 'Falha no login!',
      },
      success: {
        title: 'Login bem sucedido!',
        content: 'Você será redirecionado em breve.',
      },
    },
  },
  duration: 4500,
  validateLogin: {
    emptyFields: {
      title: 'Campo(s) vazio(s)',
      content: 'Preencha todos os campos',
    },
    isNotEmail: {
      title: 'Email inválido',
      content: 'O email deve seguir o padrão "teste@teste.com"',
    },
    minLength: {
      title: 'Senha curta',
      content: 'A senha deve ter pelo menos 8 caracteres',
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
