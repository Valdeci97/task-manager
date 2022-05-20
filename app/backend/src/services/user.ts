import { compareSync, hash } from 'bcryptjs';
import User from '../database/models/user';
import JWT from '../helpers/jwt';
import IUser from '../interfaces/user';

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
      id: user.id,
      email: user.email,
      token,
    };
  }

  public async createUser(user: IUser) {
    const { email, password } = user;
    const emailExists = await this._user.findOne({ where: { email } });
    if (emailExists) return { status: 409, message: 'Email already exists' };
    const cryptPassword = await hash(password, 3);
    const newUser = {
      email,
      password: cryptPassword,
    };
    await this._user.create(newUser);
    return 'OK';
  }
}

export default new UserService();
