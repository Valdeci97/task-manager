import { render, screen, userEvent, vi } from '../utils/testUtils';
vi.doMock('../utils/api');

import App from '../App';
import * as api from '../utils/api';
import { userMock } from './mocks';

describe('Rendering Login page', () => {
  beforeEach(() => {
    render(<App />);
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  describe('Testing Login page HTML composition', () => {
    it('should render all elements', () => {
      const title = screen.getByRole('heading', {
        level: 1,
        name: /task manager/i,
      });
      const switchButton = screen.getByRole('switch');
      const emailInput = screen.getByLabelText(/e-mail/);
      const passwordInput = screen.getByLabelText(/senha/i);
      const loginButton = screen.getByRole('button', { name: /entrar/i });
      const signupButton = screen.getByRole('button', { name: /criar conta/i });

      expect(title).toBeInTheDocument();
      expect(switchButton).toBeInTheDocument();
      expect(switchButton).toHaveAttribute('type', 'checkbox');
      expect(emailInput).toBeInTheDocument();
      expect(emailInput).toHaveAttribute('type', 'text');
      expect(emailInput).toHaveAttribute('placeholder', 'seu_email@email.com');
      expect(passwordInput).toBeInTheDocument();
      expect(passwordInput).toHaveAttribute('type', 'password');
      expect(passwordInput).toHaveAttribute('placeholder', '********');
      expect(loginButton).toBeInTheDocument();
      expect(loginButton).toHaveAttribute('type', 'button');
      expect(signupButton).toBeInTheDocument();
      expect(signupButton).toHaveAttribute('type', 'button');
    });
  });

  describe('Testing Login behaviour', () => {
    it('should redirect to /signup route', async () => {
      const signupButton = screen.getByRole('button', { name: /criar conta/i });
      await userEvent.click(signupButton);
      expect(window.location.pathname).toBe('/signup');
    });

    it('should be able to complete login', async () => {
      const spyApi = vi.spyOn(api, 'login');
      spyApi.mockImplementationOnce(async () => userMock.loginResponse);
      const emailInput = screen.getByLabelText(/e-mail/i);
      const passwordInput = screen.getByLabelText(/senha/i);
      const loginButton = screen.getByRole('button', { name: /entrar/i });
      await userEvent.type(emailInput, 'email@email.com');
      await userEvent.type(passwordInput, '12345678');
      await userEvent.click(loginButton);
      expect(api.login).toHaveBeenCalledTimes(1);
      expect(api.login).toHaveBeenCalledWith({
        email: 'email@email.com',
        password: '12345678',
      });
    });
  });
});
