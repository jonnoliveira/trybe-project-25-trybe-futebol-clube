import LeaderBoardInterface from './LeaderBoardInterface';

export default interface LeaderBoardServiceInterface {
  getHome(): Promise<LeaderBoardInterface[]>;
  getAway(): Promise<LeaderBoardInterface[]>;
  getAllClass(): Promise<LeaderBoardInterface[]>;
}
