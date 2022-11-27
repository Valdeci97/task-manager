import { useState } from 'react';
import Input from './Input';
import { LabelProps } from '../interfaces/Label';
import { SHARED } from '../styles/shared';
import { eye } from '../assets/icons';
import { hidePass, revealPass } from '../utils/password';

export default function SignupLabel({
  text,
  type,
  id,
  value,
  handleChange,
  theme,
  placeholder,
}: LabelProps) {
  const [reveal, setReveal] = useState<boolean>(true);
  return (
    <SHARED.Label htmlFor={id} theme={theme}>
      {text}
      <Input
        type={reveal ? type : 'text'}
        id={id}
        value={value}
        handleChange={handleChange}
        theme={theme}
        placeholder={placeholder}
      />
      {value.length > 0 ? (
        <SHARED.SignupImage
          onClick={() => setReveal(!reveal)}
          src={reveal ? revealPass(theme) : hidePass(theme)}
          alt={reveal ? eye.invisible.alt : eye.visible.alt}
        />
      ) : null}
    </SHARED.Label>
  );
}
