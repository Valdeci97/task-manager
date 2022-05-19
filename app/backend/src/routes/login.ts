import { Router, Request, Response, NextFunction } from 'express';
import userController from '../controllers/user';

const loginRouter = Router();

loginRouter.post(
  '/',
  (req: Request, res: Response, next: NextFunction) => userController.login(req, res, next),
);

export default loginRouter;
