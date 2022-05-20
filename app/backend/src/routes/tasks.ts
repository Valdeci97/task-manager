import { Router, Request, Response, NextFunction } from 'express';
import tasksController from '../controllers/tasks';

const taskRouter = Router();

taskRouter.get(
  '/:id',
  (req: Request, res: Response, next: NextFunction) => tasksController
    .getTasks(req, res, next),
);

export default taskRouter;
