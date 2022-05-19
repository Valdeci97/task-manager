import express, { RequestHandler } from 'express';
import loginRouter from './routes/login';
import errorMiddleware from './middlewares/error';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    const requestHandler: RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };
    this.app.use(requestHandler);
    this.app.use(express.json());
    this.app.use('/login', loginRouter);
    this.app.use(errorMiddleware);
  }

  public start(PORT: string | number): void {
    const port = PORT || 3001;
    this.app.listen(port, () => console.log('Running on port ', port));
  }
}

export { App };

export const { app } = new App();
