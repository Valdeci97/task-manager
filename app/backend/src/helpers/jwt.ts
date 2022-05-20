import 'dotenv/config';
import jwt from 'jsonwebtoken';
import IToken from '../interfaces/token';

const config: jwt.SignOptions = { expiresIn: '4h', algorithm: 'HS256' };
const SECRET = process.env.JWT_SECRET;

export default class JWT {
  public static generateToken(user: IToken) {
    return jwt.sign(user, String(SECRET), config);
  }

  public static validateToken(token: string) {
    return jwt.verify(token, String(SECRET));
  }
}
