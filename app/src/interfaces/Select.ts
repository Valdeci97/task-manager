import { Dispatch, SetStateAction } from 'react';

export interface SelectProps {
  values: string[];
  id: string;
  selectedValue: string;
  handleChange: Dispatch<SetStateAction<string>>;
}
