import { Router, Request, Response } from 'express';
import LoginController from '../controllers/LoginController';
import LoginService from '../services/LoginService';
import validateLogin from '../middlewares/hasEmailPass';

const loginRouter = Router();
const loginService = new LoginService();
const loginController = new LoginController(loginService);

loginRouter.post(
  '/',
  validateLogin,
  (req: Request, res: Response) => loginController.login(req, res),
);

export default loginRouter;
