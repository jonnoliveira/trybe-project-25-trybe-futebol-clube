import { ModelStatic } from 'sequelize';
import TeamModel from '../models/TeamModel';
import LeaderBoardServiceInterface from '../interfaces/LeaderBoardServiceInterface';
import MatchModel from '../models/MatchModel';
import MatchResultInterface from '../interfaces/MatchesultsInterface';
import TeamProperties from '../utils/TeamProperties';
import TeamInterface from '../interfaces/TeamInterface';
import MatchInterface from '../interfaces/MatchesInterface';
import LeaderBoardInterface from '../interfaces/LeaderBoardInterface';

export default class LeaderBoardService implements LeaderBoardServiceInterface {
  private modelTeam: ModelStatic<TeamModel> = TeamModel;
  private modelMatch: ModelStatic<MatchModel> = MatchModel;

  private async getAllTeams(): Promise<TeamModel[]> {
    const result = await this.modelTeam.findAll();
    return result;
  }

  private async getAllMatches(): Promise <MatchModel[]> {
    const result = await this.modelMatch.findAll({ where: { inProgress: false } });
    return result;
  }

  private static getMatchResults(teamOne: number, teamTwo: number): MatchResultInterface {
    const matchResult = {
      totalPoints: 0,
      totalVictories: 0,
      totalDraws: 0,
      totalLosses: 0,
    };

    if (teamOne > teamTwo) {
      matchResult.totalPoints += 3;
      matchResult.totalVictories += 1;
    } else if (teamOne === teamTwo) {
      matchResult.totalPoints += 1;
      matchResult.totalDraws += 1;
    } else {
      matchResult.totalLosses += 1;
    }
    return matchResult;
  }

  private static homeTeamInfo(team: TeamInterface, matches: MatchInterface[]) {
    const teamInfo = new TeamProperties(team.teamName);

    const homeMatches = matches.filter((match) => match.homeTeamId === team.id);
    teamInfo.totalGames = homeMatches.length;

    homeMatches.forEach(({ homeTeamGoals, awayTeamGoals }) => {
      const { totalPoints, totalVictories, totalDraws, totalLosses } = LeaderBoardService
        .getMatchResults(homeTeamGoals, awayTeamGoals);

      teamInfo.totalPoints += totalPoints;
      teamInfo.totalVictories += totalVictories;
      teamInfo.totalDraws += totalDraws;
      teamInfo.totalLosses += totalLosses;

      teamInfo.goalsFavor += homeTeamGoals;
      teamInfo.goalsOwn += awayTeamGoals;

      const { goalsFavor, goalsOwn, totalGames, totalPoints: TP } = teamInfo; // desestruturar após o preenchimento das variáveis anteriores
      teamInfo.goalsBalance = goalsFavor - goalsOwn;
      teamInfo.efficiency = +(((TP / (totalGames * 3))) * 100).toFixed(2); // + simplifica para number
    });
    return teamInfo;
  }

  public static sortClassification(data: LeaderBoardInterface[]) {
    const sorted = data.sort((a, b) => {
      if (a.totalPoints !== b.totalPoints) {
        return b.totalPoints - a.totalPoints;
      }
      if (a.totalVictories !== b.totalVictories) {
        return b.totalVictories - a.totalVictories;
      }
      if (a.goalsBalance !== b.goalsBalance) {
        return b.goalsBalance - a.goalsBalance;
      }
      return b.goalsFavor - a.goalsFavor;
    });
    return sorted;
  }

  public async getHome() {
    const allTeams = await this.getAllTeams();
    const allMatches = await this.getAllMatches();

    const homeTeam = allTeams.map((team) => LeaderBoardService.homeTeamInfo(team, allMatches));
    const sorted = LeaderBoardService.sortClassification(homeTeam);
    return sorted;
  }
}
