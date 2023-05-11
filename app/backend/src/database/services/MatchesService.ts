import { ModelStatic } from 'sequelize';
import MatchesServiceInterface from '../interfaces/MatchesServiceInterface';
import MatchInterface from '../interfaces/MatchesInterface';
import MatchModel from '../models/MatchModel';
import TeamModel from '../models/TeamModel';
import BodyCreateInterface from '../interfaces/BodyCreateInterface';

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

  public async finishById(id: number): Promise<number> {
    const [message] = await this.model.update(
      { inProgress: false },
      { where: { id } },
    );

    return message;
  }

  public async updateById(id: number, body: BodyCreateInterface)
    : Promise<number> {
    const [message] = await this.model.update(
      { homeTeamGoals: body.homeTeamGoals, awayTeamGoals: body.awayTeamGoals },
      { where: { id } },
    );

    return message;
  }

  public async create(body: BodyCreateInterface)
    : Promise<MatchModel> {
    const data = await this.model.create(
      {
        homeTeamId: body.homeTeamId,
        homeTeamGoals: body.homeTeamGoals,
        awayTeamId: body.awayTeamId,
        awayTeamGoals: body.awayTeamGoals,
        inProgress: true,
      },
    );

    return data;
  }
}
