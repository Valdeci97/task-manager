import { useContext } from 'react';
import { AppCtx } from '../context/Provider';
import { ButtonProps } from '../interfaces/Button';
import { SHARED } from '../styles/shared';
import { login } from '../utils/api';
import { handleLoginResponse } from '../utils/handleLoginResponse';
import { validateLogin } from '../utils/validateLogin';
import { toast } from './ToastManager';

export default function Button({ name, email, password, text }: ButtonProps) {
  const { theme } = useContext(AppCtx);

  async function handleFetch(): Promise<void> {
    if (name) {
      console.log(name, email, password);
      return;
    }
    const isNotValid = validateLogin(email, password, theme);
    if (isNotValid) return toast.error({ ...isNotValid });
    const response = await login(email, password);
    handleLoginResponse(response, theme);
  }

  return (
    <SHARED.Button type="button" onClick={handleFetch}>
      {text}
    </SHARED.Button>
  );
}
