import { Dispatch, SetStateAction } from 'react';

export interface DateTimeInputProps {
  id: string;
  type: string;
  value: string;
  handleChange: Dispatch<SetStateAction<string>>;
  text: string;
}
