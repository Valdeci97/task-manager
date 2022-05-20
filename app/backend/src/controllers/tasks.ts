import { Request, Response, NextFunction } from 'express';
import tasksService from '../services/tasks';

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
}

export default new TaskController();
