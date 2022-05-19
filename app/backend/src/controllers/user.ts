import { Request, Response, NextFunction } from 'express';
import userService from '../services/user';

class UserController {
  private _service;

  constructor() { this._service = userService; }

  public async login(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const { email, password } = req.body;
      const result = await this._service.login(email, password);
      if (result.status) return res.status(result.status).json({ message: result.message });
      return res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
}

export default new UserController();
