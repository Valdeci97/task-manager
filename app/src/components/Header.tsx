import { useContext } from 'react';
import { AppCtx } from '../context/Provider';
import { SH } from '../styles/header';
import { SW } from '../styles/switch';
import { storageHandler } from '../utils/localStorage';

export default function Header(): JSX.Element {
  const { theme, setTheme } = useContext(AppCtx);

  function handleTheme(): void {
    const isLight = theme === 'light';
    if (isLight) {
      storageHandler.setByKey('theme', 'dark');
      return setTheme('dark');
    }
    storageHandler.setByKey('theme', 'light');
    setTheme('light');
  }

  return (
    <>
      <SH.Container theme={theme}>
        <header>
          <h1>Task manager - organizando sua rotina</h1>
        </header>
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
