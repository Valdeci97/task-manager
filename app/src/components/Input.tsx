import { ChangeEvent } from 'react';
import { TextInputProps } from '../interfaces/Input';
import { SHARED } from '../styles/shared';

export default function Input({
  type,
  id,
  value,
  handleChange,
  theme,
  placeholder,
}: TextInputProps) {
  return (
    <SHARED.Input
      type={type ? type : 'text'}
      value={value}
      id={id}
      onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
        handleChange(target.value)
      }
      placeholder={placeholder}
      theme={theme}
    />
  );
}
