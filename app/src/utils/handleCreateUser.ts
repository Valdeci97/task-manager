import { toast } from '../components/ToastManager';
import { validateUser } from './validate';

export async function handleCreateUser(
  name: string,
  email: string,
  password: string,
  theme: string,
): Promise<void> {
  const toastInfo = validateUser(name, email, password, theme);
  if (toastInfo) return toast.warn({ ...toastInfo });
}
