import { Request, Response } from 'express';
import LeaderBoardControllerInterface from '../interfaces/LeaderBoardControllerInterface';
import { HTTP_STATUS_OK, HTTP_SERVER_ERROR, SERVER_ERROR } from '../utils/statusHTTP';
import LeaderBoardService from '../services/LeaderBoardService';

export default class LeaderBoardController implements LeaderBoardControllerInterface {
  constructor(private _leaderBoardService: LeaderBoardService) {}

  public async getHome(_req: Request, res: Response) {
    const data = await this._leaderBoardService.getHome();

    if (data.length === 0) return res.status(HTTP_SERVER_ERROR).json({ message: SERVER_ERROR });

    return res.status(HTTP_STATUS_OK).json(data);
  }
}
