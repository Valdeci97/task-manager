import { TextAreaProps } from '../interfaces/TextArea';
import { SHARED } from '../styles/shared';

export default function TextArea({
  text,
  placeholder,
  handleChange,
  value,
  theme,
  id,
}: TextAreaProps) {
  return (
    <SHARED.LabelContainer>
      <SHARED.Label htmlFor={id} theme={theme}>
        {text}&nbsp;&nbsp;
        <SHARED.TextArea
          placeholder={placeholder}
          rows={10}
          onChange={({ target }) => handleChange(target.value)}
          value={value}
          id={id}
          theme={theme}
        />
      </SHARED.Label>
    </SHARED.LabelContainer>
  );
}
