import App from '../App';
import { render, screen } from '../utils/testUtils';

describe('Rendering Create Task page', () => {
  beforeEach(() => {
    render(<App />, { route: '/create-task' });
  });

  describe('Testing HTML coposition', () => {
    it('should render all elements', () => {
      const title = screen.getByRole('heading', {
        level: 1,
        name: /olá, usuário/i,
      });
      const logoffButton = screen.getByRole('button', { name: /sair/i });
      const switchButton = screen.getByRole('switch');
      const taskTitle = screen.getByLabelText(/título/i);
      const taskDescription = screen.getByLabelText(/descrição/i);
      const taskCategory = screen.getByLabelText(/categoria/i);
      const taskStatus = screen.getByLabelText(/condição/i);
      const taskDate = screen.getByLabelText(/data/i);
      const taskHour = screen.getByLabelText(/hora/i);
      const createTaskButton = screen.getByRole('button', { name: /criar/i });
      expect(title).toBeInTheDocument;
      expect(logoffButton).toBeInTheDocument;
      expect(switchButton).toBeInTheDocument;
      expect(taskTitle).toBeInTheDocument;
      expect(taskDescription).toBeInTheDocument;
      expect(taskCategory).toBeInTheDocument;
      expect(taskStatus).toBeInTheDocument;
      expect(taskDate).toBeInTheDocument;
      expect(taskHour).toBeInTheDocument;
      expect(createTaskButton).toBeInTheDocument;
    });
  });
});
