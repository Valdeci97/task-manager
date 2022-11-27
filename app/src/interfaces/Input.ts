import { Dispatch, SetStateAction } from 'react';

export interface TextInputProps {
  type?: string;
  id: string;
  value: string;
  handleChange: Dispatch<SetStateAction<string>>;
  theme: string;
  placeholder: string;
}
