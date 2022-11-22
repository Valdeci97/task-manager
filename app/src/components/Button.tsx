import { SHARED } from '../styles/shared';

type ButtonProps = {
  text: string;
};

export default function Button({ text }: ButtonProps) {
  return <SHARED.Button type="button">{text}</SHARED.Button>;
}
