import { Dispatch, SetStateAction } from 'react';
import { NavigateFunction } from 'react-router-dom';

export interface AppContext {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
  navigate: NavigateFunction;
}
