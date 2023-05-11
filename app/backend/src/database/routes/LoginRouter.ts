import { Router, Request, Response } from 'express';
import LoginController from '../controllers/LoginController';
import LoginService from '../services/LoginService';
import ValidateLogin from '../middlewares/ValidateLogin';

const loginRouter = Router();
const loginService = new LoginService();
const loginController = new LoginController(loginService);

loginRouter.post(
  '/',
  ValidateLogin.isValid,
  (req: Request, res: Response) => loginController.login(req, res),
);

export default loginRouter;
