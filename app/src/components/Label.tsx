import Input from './Input';
import { LabelProps } from '../interfaces/Label';
import { SHARED } from '../styles/shared';

export default function Label({
  text,
  type,
  id,
  value,
  handleChange,
  theme,
  placeholder,
}: LabelProps) {
  return (
    <SHARED.LabelContainer>
      <SHARED.Label htmlFor={id} theme={theme}>
        {text}
        <Input
          type={type}
          value={value}
          id={id}
          handleChange={handleChange}
          theme={theme}
          placeholder={placeholder}
        />
      </SHARED.Label>
    </SHARED.LabelContainer>
  );
}
