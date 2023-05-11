import MatchModel from '../models/MatchModel';
import BodyCreateInterface from './BodyCreateInterface';
import MatchInterface from './MatchesInterface';

export default interface MatchesServiceInterface {
  getAll(): Promise<MatchInterface[]>;
  getByProgress(inProgress: boolean): Promise<MatchInterface[]>;
  finishById(id: number): Promise<number>;
  updateById(id: number, body: { homeTeamGoals: number, awayTeamGoals: number })
  : Promise<number>;
  create(body: BodyCreateInterface): Promise<MatchModel>
}
