import { useContext } from 'react';
import { AppCtx } from './context/Provider';
import Router from './Router';
import GlobalStyle from './styles';

export default function App() {
  const { theme } = useContext(AppCtx);

  return (
    <>
      <Router />
      <GlobalStyle theme={theme} />
    </>
  );
}
