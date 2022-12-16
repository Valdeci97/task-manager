import { Login } from '../../interfaces/api/Users';

type UserMock = {
  loginResponse: Login;
};

export const userMock: UserMock = {
  loginResponse: {
    login: {
      user: { id: '', name: '', email: '' },
      token: '',
    },
  },
};
