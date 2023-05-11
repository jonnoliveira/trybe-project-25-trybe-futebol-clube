import { Request, Response } from 'express';
import MatchInterface from './MatchesInterface';

export default interface MatchesControllerInterface {
  getAll(req: Request, res: Response): Promise<Response<MatchInterface[]>>,
}
