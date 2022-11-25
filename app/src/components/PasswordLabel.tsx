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
}: LabelProps) {
  const [reveal, setReveal] = useState<boolean>(true);

  return (
    <SHARED.Label htmlFor={id}>
      {text}
      <Input
        type={reveal ? type : 'text'}
        id={id}
        value={value}
        handleChange={handleChange}
      />
      {value.length > 0 ? (
        <SHARED.Image
          onClick={() => setReveal(!reveal)}
          src={reveal ? eye.visible.src : eye.invisible.src}
          alt={reveal ? eye.visible.alt : eye.invisible.alt}
        />
      ) : null}
    </SHARED.Label>
  );
}
