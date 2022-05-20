import { Request, Response, NextFunction } from 'express';
import tasksService from '../services/tasks';
import HttpException from '../exceptions/httpException';

const INVALID_TOKEN = 'Invalid Token';
const TOKEN_NOT_FOUND = 'Token not found';
const USER_DOES_NOT_EXISTS = 'User does not exists';

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
        next(new HttpException(404, TOKEN_NOT_FOUND));
      } else {
        this._service.verifyToken(authorization);
        const createdTask = await this._service.createTask(req.body);
        if (!createdTask) {
          return res.status(400).json({ message: USER_DOES_NOT_EXISTS });
        }
        return res.status(201).json(createdTask);
      }
    } catch (err) {
      next(new HttpException(400, INVALID_TOKEN));
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
        next(new HttpException(404, TOKEN_NOT_FOUND));
      } else {
        const destroyedTask = this._service.destroyTask(id, authorization);
        if (!destroyedTask) {
          return res.status(400).json({ message: USER_DOES_NOT_EXISTS });
        }
        return res.status(204).end();
      }
    } catch (err) {
      next(new HttpException(400, INVALID_TOKEN));
    }
  }

  public async updateTask(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const { authorization } = req.headers;
      if (!authorization) {
        next(new HttpException(404, TOKEN_NOT_FOUND));
      } else {
        const updatedTask = this._service.updateTask(req.body);
        if (!updatedTask) {
          return res.status(400).json({ message: USER_DOES_NOT_EXISTS });
        }
        return res.status(200).json(req.body);
      }
    } catch (err) {
      next(new HttpException(400, INVALID_TOKEN));
    }
  }
}

export default new TaskController();
