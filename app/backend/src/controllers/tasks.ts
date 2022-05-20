import { Request, Response, NextFunction } from 'express';
import tasksService from '../services/tasks';
import HttpException from '../exceptions/httpException';

class TaskController {
  private _service;

  constructor() { this._service = tasksService; }

  public async getTasks(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const { id } = req.params;
      const tasks = await this._service.getTasks(+id);
      return res.status(200).json(tasks);
    } catch (err) {
      next(err);
    }
  }

  public async createTask(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const { authorization } = req.headers;
      if (!authorization) {
        next(new HttpException(404, 'Token not found'));
      } else {
        this._service.verifyToken(authorization);
        const createdTask = await this._service.createTask(req.body);
        if (!createdTask) {
          return res.status(400).json({ message: 'User does not exists' });
        }
        return res.status(201).json(createdTask);
      }
    } catch (err) {
      next(new HttpException(400, 'Invalid Token'));
    }
  }

  public async destroyTask(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const { authorization } = req.headers;
      const { id } = req.params;
      if (!authorization) {
        next(new HttpException(404, 'Token not found'));
      } else {
        const destroyedTask = this._service.destroyTask(id, authorization);
        if (!destroyedTask) {
          return res.status(400).json({ message: 'User does not exists' });
        }
        return res.status(204).end();
      }
    } catch (err) {
      next(new HttpException(400, 'Invalid Token'));
    }
  }
}

export default new TaskController();
