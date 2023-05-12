export default interface MatchInterface {
  id?: number;
  homeTeamId: number;
  awayTeamId: number,
  homeTeamGoals: number;
  awayTeamGoals: number,
  inProgress: boolean,
  homeTeam?: {
    teamName: string,
  };
  awayTeam?: {
    teamName: string,
  };
}
