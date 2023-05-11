import { Request, Response } from 'express';
import LoginServiceInterface from '../interfaces/LoginServiceInterface';
import { HTTP_STATUS_OK } from '../utils/statusHTTP';

export default class LoginController {
  constructor(private _loginService: LoginServiceInterface) {}

  public async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const { status, message } = await this._loginService.login(email, password);

    if (status) return res.status(status).json({ message });

    return res.status(HTTP_STATUS_OK).json({ token: message });
  }
}
