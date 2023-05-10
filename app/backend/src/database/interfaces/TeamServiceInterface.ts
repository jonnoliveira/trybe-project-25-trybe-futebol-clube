import TeamInterface from './TeamInterface';

export default interface TeamsServiceInterface {
  getAll(): Promise<TeamInterface[]>;
}
