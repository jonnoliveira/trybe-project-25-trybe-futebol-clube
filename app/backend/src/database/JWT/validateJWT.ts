import jwt = require('jsonwebtoken');
import UserInterface from '../interfaces/UserInterface';

const secretkey = process.env.JWT_SECRET || 'jwt_secret';

const configJWT: jwt.SignOptions = {
  expiresIn: '10d',
  algorithm: 'HS256',
};

const generateToken = (payload: UserInterface) => {
  const token = jwt.sign({ payload }, secretkey, configJWT);
  return token;
};

const validateToken = (token: string) => {
  if (!token) return { message: 'Token not found' };
  const isValid = jwt.verify(token, secretkey);
  return isValid;
};

export {
  generateToken,
  validateToken,
};
