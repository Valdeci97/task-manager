import { ButtonProps } from '../interfaces/Button';
import { SHARED } from '../styles/shared';
import { login } from '../utils/api';
import { handleLoginResponse } from '../utils/handleLoginResponse';
import { validateLogin } from '../utils/validateLogin';
import { toast } from './ToastManager';

export default function Button({
  name,
  email,
  password,
  text,
  theme,
}: ButtonProps) {
  async function handleFetch(): Promise<void> {
    if (name) {
      console.log(name, email, password);
      return;
    }
    const toastInfo = validateLogin(email, password, theme);
    if (toastInfo) return toast.warn({ ...toastInfo });
    const response = await login(email, password);
    handleLoginResponse(response, theme);
  }

  return (
    <SHARED.Button type="button" onClick={handleFetch} theme={theme}>
      {text}
    </SHARED.Button>
  );
}
