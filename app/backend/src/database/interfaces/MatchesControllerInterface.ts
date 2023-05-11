import { Request, Response } from 'express';
import MatchInterface from './MatchesInterface';
import MatchModel from '../models/MatchModel';

export default interface MatchesControllerInterface {
  getAll(req: Request, res: Response): Promise<Response<MatchInterface[]>>,
  finishById(req: Request, res: Response): Promise<Response<{ message: string }>>,
  updateById(req: Request, res: Response): Promise<Response<{ message: string }>>,
  create(req: Request, res: Response): Promise<Response<MatchModel>>,
}
