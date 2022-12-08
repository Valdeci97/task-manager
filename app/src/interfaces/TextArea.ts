import { Dispatch, SetStateAction } from 'react';

export interface TextAreaProps {
  text: string;
  placeholder: string;
  handleChange: Dispatch<SetStateAction<string>>;
  value: string;
  theme: string;
  id: string;
}
