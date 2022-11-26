import {
  useState,
  createContext,
  FC,
  ReactNode,
  useEffect,
  useCallback,
} from 'react';
import { AppContext } from '../interfaces/AppContext';
import { storageHandler } from '../utils/localStorage';

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

  const handleTheme = useCallback(() => {
    const localTheme = storageHandler.getByKey('theme');
    if (!localTheme) return storageHandler.setByKey('theme', theme);
    setTheme(localTheme);
  }, [theme]);

  useEffect(() => {
    handleTheme();
  }, [handleTheme]);

  return <AppCtx.Provider value={value}>{children}</AppCtx.Provider>;
};
