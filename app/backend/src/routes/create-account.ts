import { Router, Request, Response, NextFunction } from 'express';
import userController from '../controllers/user';

const accountRouter = Router();

accountRouter.post(
  '/',
  (req: Request, res: Response, next: NextFunction) => userController
    .create(req, res, next),
);

export default accountRouter;
