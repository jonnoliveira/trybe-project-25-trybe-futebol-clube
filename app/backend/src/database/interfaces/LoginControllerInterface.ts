import { Request, Response } from 'express';

export default interface LoginControllerInterface {
  login(req: Request, res: Response):
  Promise<Response<{ message: string }>> | Promise<Response<{ token: string }>>
}
