import TeamProperties from '../utils/TeamProperties';

export default interface LeaderBoardServiceInterface {
  getHome(): Promise<TeamProperties[]>;
}
