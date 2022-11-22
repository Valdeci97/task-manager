import Input from './Input';
import { LabelProps } from '../interfaces/Label';
import { SHARED } from '../styles/shared';

export default function Label({
  text,
  type,
  id,
  value,
  handleChange,
}: LabelProps) {
  return (
    <SHARED.Label htmlFor={id}>
      {text}
      <Input type={type} value={value} id={id} handleChange={handleChange} />
    </SHARED.Label>
  );
}
