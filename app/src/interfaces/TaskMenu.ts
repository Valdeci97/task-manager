import { Dispatch, SetStateAction } from 'react';

export interface TaskMenuProps {
  isActive: boolean;
  handleClick: Dispatch<SetStateAction<string>>;
  text: string;
}
