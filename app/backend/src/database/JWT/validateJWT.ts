import jwt = require('jsonwebtoken');
import UserInterface from '../interfaces/UserInterface';
// import { TOKEN_NOT_FOUND } from '../utils/statusHTTP';

const secretkey = process.env.JWT_SECRET || 'jwt_secret';

const configJWT: jwt.SignOptions = {
  expiresIn: '10d',
  algorithm: 'HS256',
};

export default class validateJWT {
  public static generateToken = (payload: UserInterface) => {
    const token = jwt.sign({ payload }, secretkey, configJWT);
    return token;
  };

  public static validateToken = (token: string) => {
    // if (!token) return { message: TOKEN_NOT_FOUND };
    const isValid = jwt.verify(token, secretkey);
    return isValid;
  };
}
