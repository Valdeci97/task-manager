import { render, screen, vi } from '../utils/testUtils';
vi.doMock('../utils/api');
import App from '../App';

describe('Rendering Tasks page', () => {
  beforeEach(() => {
    render(<App />, { route: '/tasks' });
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  describe('Testing HTML composition', () => {
    it('should render all elements', () => {
      const title = screen.getByRole('heading', {
        level: 1,
        name: /olá, usuário/i,
      });
      const logoffButton = screen.getByRole('button', { name: /sair/i });
      const switchButton = screen.getByRole('switch');
      const allTasksButton = screen.getByRole('button', { name: /todas/i });
      const dayTasksButton = screen.getByRole('button', { name: /hoje/i });
      const weekTasksButton = screen.getByRole('button', { name: /semana/i });
      const monthTasksButton = screen.getByRole('button', { name: /mês/i });
      const yearTasksButton = screen.getByRole('button', { name: /ano/i });
      const lateTasksButton = screen.getByRole('button', {
        name: /atrasadas/i,
      });
      expect(title).toBeInTheDocument();
      expect(logoffButton).toBeInTheDocument();
      expect(switchButton).toBeInTheDocument();
      expect(allTasksButton).toBeInTheDocument();
      expect(dayTasksButton).toBeInTheDocument();
      expect(weekTasksButton).toBeInTheDocument();
      expect(monthTasksButton).toBeInTheDocument();
      expect(yearTasksButton).toBeInTheDocument();
      expect(lateTasksButton).toBeInTheDocument();
    });
  });
});
