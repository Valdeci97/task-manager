import { compareSync } from 'bcryptjs';
import User from '../database/models/user';
import JWT from '../helpers/jwt';

class UserService {
  private _user;

  constructor() { this._user = User; }

  public async login(email: string, password: string) {
    const user = await this._user.findOne({ where: { email } });
    if (!user || compareSync(password, user.password)) {
      return { status: 401, message: 'Incorrect email or password' };
    }
    const token = JWT.generateToken({ email, id: user.id });
    return {
      user,
      token,
    };
  }
}

export default new UserService();
