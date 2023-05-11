import { Response, Request, NextFunction } from 'express';

const BAD_REQUEST = 'All fields must be filled';
const FORMAT_INVALID = 'Invalid email or password';

// VALIDAÇÃO DO EMAIL
const emailPattern = (
  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/
);

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400)
      .json({ message: BAD_REQUEST });
  }
  const validEmail = emailPattern.test(email);
  if (validEmail === false) {
    return res.status(401)
      .json({ message: FORMAT_INVALID });
  }

  if (password.length < 6) {
    return res.status(401)
      .json({ message: FORMAT_INVALID });
  }

  next();
};

export default validateLogin;
