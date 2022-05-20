import { Router, Request, Response, NextFunction } from 'express';
import login from '../middlewares/login';
import userController from '../controllers/user';

const loginRouter = Router();

loginRouter.post(
  '/',
  (req: Request, res: Response, next: NextFunction) => login.email(req, res, next),
  (req: Request, res: Response, next: NextFunction) => login.password(req, res, next),
  (req: Request, res: Response, next: NextFunction) => userController.login(req, res, next),
);

export default loginRouter;
