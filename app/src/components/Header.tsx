import { useContext } from 'react';
import { AppCtx } from '../context/Provider';
import { SH } from '../styles/header';
import { SW } from '../styles/switch';
import { storageHandler } from '../utils/localStorage';

export default function Header({ text }: { text?: string }): JSX.Element {
  const { theme, setTheme } = useContext(AppCtx);

  function handleTheme(): void {
    const isLight = theme === 'light';
    if (isLight) {
      storageHandler.setUserPreferences({ theme: 'dark' });
      return setTheme('dark');
    }
    storageHandler.setUserPreferences({ theme: 'light' });
    setTheme('light');
  }

  function logoff(): void {
    storageHandler.reset();
    return window.location.assign(`${window.location.origin}/login`);
  }

  return (
    <>
      <SH.Container theme={theme}>
        <SH.Header>
          <SH.Title>{text ? text : 'Task manager'}</SH.Title>
          {text ? (
            <SH.LogoffButton type="button" onClick={logoff} theme={theme}>
              Sair
            </SH.LogoffButton>
          ) : null}
        </SH.Header>
        <SW.Theme htmlFor="theme">
          <input
            type="checkbox"
            role="switch"
            name="theme-handler"
            id="theme"
            checked={theme === 'dark'}
            onChange={handleTheme}
          />
          <span />
        </SW.Theme>
      </SH.Container>
    </>
  );
}
