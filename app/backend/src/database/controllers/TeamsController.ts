import { Request, Response } from 'express';
import TeamsControllerInterface from '../interfaces/TeamsControllerInterface';
import TeamsServiceInterface from '../interfaces/TeamServiceInterface';
import { HTTP_ERROR, HTTP_STATUS_OK, NOT_TEAM } from '../utils/statusHTTP';

export default class TeamsController implements TeamsControllerInterface {
  constructor(private _teamsService: TeamsServiceInterface) {}

  public async getAll(_req: Request, res: Response) {
    const data = await this._teamsService.getAll();

    return res.status(HTTP_STATUS_OK).json(data);
  }

  public async getById(req: Request, res: Response) {
    const { id } = req.params;
    const message = await this._teamsService.getById(Number(id));

    if (!message) return res.status(HTTP_ERROR).json({ message: NOT_TEAM });

    return res.status(HTTP_STATUS_OK).json(message);
  }
}
