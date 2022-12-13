import {
  useState,
  createContext,
  FC,
  ReactNode,
  useEffect,
  useCallback,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../interfaces/AppContext';
import { storageHandler } from '../utils/localStorage';

export const AppCtx = createContext<AppContext>({
  theme: 'light',
  setTheme: () => '',
  navigate: () => '',
});

interface ContextProps {
  children: ReactNode;
}

export const Provider: FC<ContextProps> = ({ children }): JSX.Element => {
  const [theme, setTheme] = useState<string>('light');
  const navigate = useNavigate();

  const value = { theme, setTheme, navigate };

  const handleTheme = useCallback(() => {
    const localTheme = storageHandler.getTheme();
    setTheme(localTheme);
  }, []);

  useEffect(() => {
    handleTheme();
  }, [handleTheme]);

  return <AppCtx.Provider value={value}>{children}</AppCtx.Provider>;
};
