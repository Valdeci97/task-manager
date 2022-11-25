import { useState, createContext, FC, ReactNode } from 'react';
import { AppContext } from '../interfaces/AppContext';

export const AppCtx = createContext<AppContext>({
  theme: 'light',
  setTheme: () => '',
});

interface ContextProps {
  children: ReactNode;
}

export const Provider: FC<ContextProps> = ({ children }): JSX.Element => {
  const [theme, setTheme] = useState<string>('light');

  const value = { theme, setTheme };

  return <AppCtx.Provider value={value}>{children}</AppCtx.Provider>;
};
