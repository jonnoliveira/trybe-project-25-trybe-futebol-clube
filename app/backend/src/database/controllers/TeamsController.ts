import { Request, Response } from 'express';
import TeamsControllerInterface from '../interfaces/TeamsControllerInterface';
import TeamsServiceInterface from '../interfaces/TeamServiceInterface';

export default class TeamsController implements TeamsControllerInterface {
  private _teamsService: TeamsServiceInterface;

  constructor(TService: TeamsServiceInterface) {
    this._teamsService = TService;
  }

  public async getAll(_req: Request, res: Response) {
    const data = await this._teamsService.getAll();

    return res.status(200).json(data);
  }
}
