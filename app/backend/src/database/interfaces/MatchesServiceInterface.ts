import MatchInterface from './MatchesInterface';

export default interface MatchesServiceInterface {
  getAll(): Promise<MatchInterface[]>;
  getByProgress(inProgress: boolean): Promise<MatchInterface[]>;
  finishById(id: number): Promise<number>;
}
