import { Request, Response } from 'express';
import MatchesControllerInterface from '../interfaces/MatchesControllerInterface';
import MatchesServiceInterface from '../interfaces/MatchesServiceInterface';
import { HTTP_STATUS_OK, SERVER_ERROR, HTTP_SERVER_ERROR, HTTP_CREATED } from '../utils/statusHTTP';

export default class MatchesController implements MatchesControllerInterface {
  constructor(private _macthesService: MatchesServiceInterface) {}

  public async getAll(req: Request, res: Response) {
    const { inProgress } = req.query;

    if (inProgress) {
      const data = await this._macthesService.getByProgress(inProgress === 'true'); // https://www.scaler.com/topics/string-to-boolean-javascript/

      return res.status(HTTP_STATUS_OK).json(data);
    }

    const data = await this._macthesService.getAll();
    return res.status(HTTP_STATUS_OK).json(data);
  }

  public async finishById(req: Request, res: Response) {
    const { id } = req.params;
    const data = await this._macthesService.finishById(Number(id));

    if (data <= 0) {
      return res.status(HTTP_SERVER_ERROR).json({ message: SERVER_ERROR });
    }

    return res.status(HTTP_STATUS_OK).json({ message: 'Finished' });
  }

  public async updateById(req: Request, res: Response) {
    const { id } = req.params;
    const { body } = req;

    const data = await this._macthesService.updateById(Number(id), body);

    if (data <= 0) {
      return res.status(HTTP_SERVER_ERROR).json({ message: SERVER_ERROR });
    }

    return res.status(HTTP_STATUS_OK).json({ message: 'Match Updated' });
  }

  public async create(req: Request, res: Response) {
    const { body } = req;

    const data = await this._macthesService.create(body);

    return res.status(HTTP_CREATED).json(data);
  }
}
