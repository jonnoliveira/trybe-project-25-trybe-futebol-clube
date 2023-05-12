import { Response } from 'express';
import { Request } from 'express-serve-static-core';
import TeamProperties from '../utils/TeamProperties';

export default interface LeaderBoardControllerInterface {
  getHome(req: Request, res: Response): Promise<Response<TeamProperties[] | { message: string }>>;
}
