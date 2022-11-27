import { ButtonProps } from '../interfaces/Button';
import { SHARED } from '../styles/shared';
import { handleCreateUser } from '../utils/handleCreateUser';
import { handleLogin } from '../utils/handleLogin';

export default function Button({
  name,
  email,
  password,
  text,
  theme,
}: ButtonProps) {
  async function handleFetch(): Promise<void> {
    if (name) {
      return await handleCreateUser(name, email, password, theme);
    }
    await handleLogin(email, password, theme);
  }

  return (
    <SHARED.Button type="button" onClick={handleFetch} theme={theme}>
      {text}
    </SHARED.Button>
  );
}
