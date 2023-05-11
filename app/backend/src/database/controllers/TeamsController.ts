import { Request, Response } from 'express';
import TeamsControllerInterface from '../interfaces/TeamsControllerInterface';
import TeamsServiceInterface from '../interfaces/TeamServiceInterface';

export default class TeamsController implements TeamsControllerInterface {
  constructor(private _teamsService: TeamsServiceInterface) {}

  public async getAll(_req: Request, res: Response) {
    const data = await this._teamsService.getAll();

    return res.status(200).json(data);
  }

  public async getById(req: Request, res: Response) {
    const { id } = req.params;
    const data = await this._teamsService.getById(Number(id));

    if (!data) return res.status(404).json({ message: 'Team not found' });

    return res.status(200).json(data);
  }
}
