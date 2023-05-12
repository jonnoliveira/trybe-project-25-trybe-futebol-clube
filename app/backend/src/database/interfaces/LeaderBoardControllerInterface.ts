import { Response } from 'express';
import { Request } from 'express-serve-static-core';

export default interface LeaderBoardControllerInterface {
  getHome(req: Request, res: Response): Promise<any>;
}
