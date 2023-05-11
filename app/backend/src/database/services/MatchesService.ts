import { ModelStatic } from 'sequelize';
import MatchesServiceInterface from '../interfaces/MatchesServiceInterface';
import MatchInterface from '../interfaces/MatchesInterface';
import MatchModel from '../models/MatchModel';
import TeamModel from '../models/TeamModel';

export default class MatchesService implements MatchesServiceInterface {
  protected model: ModelStatic<MatchModel> = MatchModel;

  public async getAll(): Promise<MatchInterface[]> {
    const message = await this.model.findAll({
      include:
      [
        { model: TeamModel, as: 'homeTeam', attributes: ['teamName'] },
        { model: TeamModel, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });
    return message;
  }

  public async getByProgress(inProgress: boolean): Promise<MatchInterface[]> {
    const message = await this.model.findAll({ where: { inProgress },
      include:
      [
        { model: TeamModel, as: 'homeTeam', attributes: ['teamName'] },
        { model: TeamModel, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });
    return message;
  }
}
