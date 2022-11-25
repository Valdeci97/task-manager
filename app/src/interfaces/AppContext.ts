import { Dispatch, SetStateAction } from 'react';

export interface AppContext {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}
