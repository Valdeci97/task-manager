import { Request, Response, NextFunction } from 'express';

import { emailSchema, passwordSchema } from '../joiSchemas/login';

class LoginValidate {
  public email = (req: Request, res: Response, next: NextFunction): Response | void => {
    const { email } = req.body;
    const { error } = emailSchema.validate({ email });
    if (error) {
      const [code, message] = error.message.split('/');
      return res.status(parseInt(code, 10)).json({ message });
    }
    next();
  };

  public password = (req: Request, res: Response, next: NextFunction): Response | void => {
    const { password } = req.body;
    const { error } = passwordSchema.validate({ password });
    if (error) {
      console.log(error);
      const [code, message] = error.message.split('/');
      console.log(code);
      return res.status(+code).json({ message });
    }
    next();
  };
}

export default new LoginValidate();
