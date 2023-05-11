import { NextFunction, Request, Response } from 'express';
import { TOKEN_NOT_FOUND, HTTP_FORMAT_INVALID, TOKEN_NOT_VALID } from '../utils/statusHTTP';
import validateJWT from '../JWT/validateJWT';

export default class ValidateToken {
  public static isValid(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(HTTP_FORMAT_INVALID)
        .json({ message: TOKEN_NOT_FOUND });
    }

    try {
      const user = validateJWT.validateToken(authorization);
      req.body.data = user;
      next();
    } catch (error) {
      console.log(error);
      return res.status(HTTP_FORMAT_INVALID).json({ message: TOKEN_NOT_VALID });
    }
  }
}
