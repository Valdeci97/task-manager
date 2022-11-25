import { useState } from 'react';
import Label from './Label';
import Button from './Button';
import { SL } from '../styles/login';
import PasswordLabel from './PasswordLabel';

export default function LoginForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <>
      <SL.Container>
        <Label
          id={'email-input'}
          value={email}
          handleChange={setEmail}
          text={'e-mail'}
        />
        <PasswordLabel
          type="password"
          id={'password-input'}
          value={password}
          handleChange={setPassword}
          text={'senha'}
        />
        <Button text="Entrar" email={email} password={password} />
      </SL.Container>
    </>
  );
}
