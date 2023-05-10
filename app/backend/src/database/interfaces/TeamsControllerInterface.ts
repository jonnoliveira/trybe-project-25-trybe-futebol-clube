import { Request, Response } from 'express';
import TeamInterface from './TeamInterface';

export default interface TeamsControllerInterface {
  getAll(req: Request, res: Response): Promise<Response<TeamInterface[]>>
}
