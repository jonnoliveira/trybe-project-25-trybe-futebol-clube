import TeamInterface from './TeamInterface';

export default interface TeamsServiceInterface {
  getAll(): Promise<TeamInterface[]>;
  getById(id: number): Promise<TeamInterface | null>;
}
