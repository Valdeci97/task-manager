import { useContext, useState } from 'react';
import { AppCtx } from '../context/Provider';
import { SSGNP } from '../styles/signup';
import Button from './Button';
import Label from './Label';
import PasswordLabel from './PasswordLabel';

export default function SignupForm() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { theme } = useContext(AppCtx);

  return (
    <>
      <SSGNP.Container>
        <Label
          text={'nome'}
          id={'name-input'}
          value={name}
          handleChange={setName}
          theme={theme}
          placeholder={'Seu nome aqui'}
        />
        <Label
          text={'e-mail'}
          value={email}
          id={'email-input'}
          handleChange={setEmail}
          theme={theme}
          placeholder={'seu_email@email.com'}
        />
        <PasswordLabel
          type={'password'}
          text={'senha'}
          value={password}
          id={'password-input'}
          handleChange={setPassword}
          theme={theme}
          placeholder={'********'}
        />
        <Button
          email={email}
          password={password}
          text={'Cadastrar'}
          theme={theme}
          name={name}
        />
      </SSGNP.Container>
    </>
  );
}
