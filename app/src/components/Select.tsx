import { SelectProps } from '../interfaces/Select';

export default function Select({
  id,
  values,
  selectedValue,
  handleChange,
}: SelectProps) {
  return (
    <label htmlFor={id}>
      <select
        name="category"
        id={id}
        value={selectedValue}
        onChange={({ target }) => handleChange(target.value)}
      >
        {values.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </label>
  );
}
