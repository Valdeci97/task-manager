import { useContext } from 'react';
import { AppCtx } from '../context/Provider';
import { SH } from '../styles/header';
import { SW } from '../styles/switch';

export default function Header(): JSX.Element {
  const { theme, setTheme } = useContext(AppCtx);

  function handleTheme(): void {
    const isLight = theme === 'light';
    if (isLight) {
      return setTheme('dark');
    }
    setTheme('light');
  }

  return (
    <>
      <SH.Container>
        <header>
          <h1>Task manager - organizando sua rotina</h1>
        </header>
        <SW.Theme htmlFor="theme">
          <input
            type="checkbox"
            role="switch"
            name="theme-handler"
            id="theme"
            onChange={handleTheme}
          />
          <span />
        </SW.Theme>
      </SH.Container>
    </>
  );
}
