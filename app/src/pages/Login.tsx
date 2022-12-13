import { useEffect } from 'react';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import { storageHandler } from '../utils/localStorage';

const theme = storageHandler.getTheme();
const token = storageHandler.getUserToken();

export default function Login() {
  useEffect(() => {
    storageHandler.setUserPreferences({ theme });
    if (token !== 'inválido') {
      return window.location.assign(`${window.location.origin}/tasks`);
    }
  }, []);

  return (
    <>
      <Header />
      <LoginForm />
    </>
  );
}
