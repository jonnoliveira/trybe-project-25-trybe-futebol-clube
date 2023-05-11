import { Response, Request, NextFunction } from 'express';
import {
  BAD_REQUEST,
  FORMAT_INVALID,
  HTTP_BAD_REQUEST,
  HTTP_FORMAT_INVALID,
} from '../utils/statusHTTP';

// VALIDAÇÃO DO EMAIL
const emailPattern = (
  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/
);

export default class ValidateLogin {
  public static isValid(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(HTTP_BAD_REQUEST)
        .json({ message: BAD_REQUEST });
    }

    const validEmail = emailPattern.test(email);
    if (validEmail === false) {
      return res.status(HTTP_FORMAT_INVALID)
        .json({ message: FORMAT_INVALID });
    }

    if (password.length < 6) {
      return res.status(HTTP_FORMAT_INVALID)
        .json({ message: FORMAT_INVALID });
    }
    next();
  }
}
