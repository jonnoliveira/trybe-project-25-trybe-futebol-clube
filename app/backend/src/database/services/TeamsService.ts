import { ModelStatic } from 'sequelize';
import TeamModel from '../models/TeamModel';
import TeamInterface from '../interfaces/TeamInterface';
import TeamsServiceInterface from '../interfaces/TeamServiceInterface';

export default class TeamsService implements TeamsServiceInterface {
  protected model: ModelStatic<TeamModel> = TeamModel;

  public async getAll(): Promise<TeamInterface[]> {
    return this.model.findAll();
  }

  public async getById(teamId: number): Promise<TeamInterface | null> {
    const data = this.model.findOne({ where: { id: teamId } });
    return data;
  }
}
