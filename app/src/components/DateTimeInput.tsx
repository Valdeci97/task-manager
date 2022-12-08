import { useContext } from 'react';
import { AppCtx } from '../context/Provider';
import { DateTimeInputProps } from '../interfaces/DateTime';
import { SHARED } from '../styles/shared';

export default function DateTimeInput({
  id,
  type,
  value,
  handleChange,
  text,
}: DateTimeInputProps) {
  const { theme } = useContext(AppCtx);

  return (
    <SHARED.LabelContainer>
      <SHARED.Label htmlFor={id} theme={theme}>
        {text}
        <SHARED.Input
          type={type}
          value={value}
          onChange={({ target }) => handleChange(target.value)}
          id={id}
          theme={theme}
        />
      </SHARED.Label>
    </SHARED.LabelContainer>
  );
}
