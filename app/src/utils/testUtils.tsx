import { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react';
import { ReactElement, ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from '../context/Provider';

function Providers({ children }: { children: ReactNode }) {
  return (
    <BrowserRouter>
      <Provider>{children}</Provider>
    </BrowserRouter>
  );
}

function customRender(
  component: ReactElement,
  { route = '/' } = {},
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  window.history.pushState({}, 'Test page', route);
  return {
    ...render(component, { wrapper: Providers, ...options }),
  };
}

export { vi } from 'vitest';
export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
export { customRender as render };
