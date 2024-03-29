import { useContext, useState } from 'react';
import Label from './Label';
import Button from './Button';
import { SL } from '../styles/login';
import PasswordLabel from './PasswordLabel';
import { AppCtx } from '../context/Provider';
import { SHARED } from '../styles/shared';

export default function LoginForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { theme, navigate } = useContext(AppCtx);

  return (
    <>
      <SL.Container>
        <Label
          id={'email-input'}
          value={email}
          handleChange={setEmail}
          text={'e-mail'}
          theme={theme}
          placeholder={'seu_email@email.com'}
        />
        <PasswordLabel
          type={'password'}
          id={'password-input'}
          value={password}
          handleChange={setPassword}
          text={'senha'}
          theme={theme}
          placeholder={'********'}
        />
        <Button text="Entrar" email={email} password={password} theme={theme} />
        <SHARED.Button
          type="button"
          theme={theme}
          onClick={() => navigate('/signup')}
        >
          Criar conta
        </SHARED.Button>
      </SL.Container>
    </>
  );
}
