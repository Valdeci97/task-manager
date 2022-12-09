import { SelectProps } from '../interfaces/Select';
import { SSLCT } from '../styles/select';

export default function Select({
  id,
  values,
  selectedValue,
  handleChange,
  text,
  theme,
}: SelectProps) {
  return (
    <SSLCT.Label htmlFor={id} theme={theme}>
      {text}&nbsp;&nbsp;
      <SSLCT.Select
        name="category"
        id={id}
        value={selectedValue}
        onChange={({ target }) => handleChange(target.value)}
        theme={theme}
      >
        {values.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </SSLCT.Select>
    </SSLCT.Label>
  );
}
