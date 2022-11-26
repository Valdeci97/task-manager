import { useState } from 'react';
import Input from './Input';
import { LabelProps } from '../interfaces/Label';
import { SHARED } from '../styles/shared';
import { eye } from '../assets/icons';

export default function PasswordLabel({
  text,
  type,
  id,
  value,
  handleChange,
  theme,
}: LabelProps) {
  const [reveal, setReveal] = useState<boolean>(true);

  function revealPass(): string {
    if (theme === 'light') return eye.light.invisible.src;
    return eye.dark.invisible.src;
  }

  function hidePass(): string {
    if (theme === 'light') return eye.light.visible.src;
    return eye.dark.visible.src;
  }

  return (
    <SHARED.Label htmlFor={id} theme={theme}>
      {text}
      <Input
        type={reveal ? type : 'text'}
        id={id}
        value={value}
        handleChange={handleChange}
        theme={theme}
      />
      {value.length > 0 ? (
        <SHARED.Image
          onClick={() => setReveal(!reveal)}
          src={reveal ? revealPass() : hidePass()}
          alt={reveal ? eye.invisible.alt : eye.visible.alt}
        />
      ) : null}
    </SHARED.Label>
  );
}
