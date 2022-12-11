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

  function minDate(): string {
    const now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
  }

  return (
    <SHARED.LabelContainer>
      <SHARED.Label htmlFor={id} theme={theme}>
        {text}
        <SHARED.DateTimeInput
          type={type}
          value={value}
          onChange={({ target }) => handleChange(target.value)}
          id={id}
          theme={theme}
          min={type === 'date' ? minDate() : undefined}
        />
      </SHARED.Label>
    </SHARED.LabelContainer>
  );
}
