import User from '../database/models/user';

class UserService {
  private _user;

  constructor() { this._user = User; }

  public async login(email: string, _password: string) {
    const user = await this._user.findOne({ where: { email } });
    if (!user) {
      return { status: 401, message: 'Incorrect email or password' };
    }
    return {
      user,
    };
  }
}

export default new UserService();
