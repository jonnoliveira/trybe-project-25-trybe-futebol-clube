import { NextFunction, Request, Response } from 'express';
import { HTTP_TEAM_ERROR, TEAM_ERROR, TEAM_ID_ERROR, HTTP_ERROR } from '../utils/statusHTTP';
import TeamsService from '../services/TeamsService';

export default class ValidateMatch {
  public static async isValid(req: Request, res: Response, next: NextFunction) {
    const { homeTeamId, awayTeamId } = req.body;

    const teamsService = new TeamsService();

    if (homeTeamId === awayTeamId) {
      return res.status(HTTP_TEAM_ERROR).json({ message: TEAM_ERROR });
    }

    const teams = [homeTeamId, awayTeamId];
    const validTeams = await Promise.all(teams.map((teamId) => teamsService.getById(teamId)));

    if (validTeams.includes(null)) {
      return res.status(HTTP_ERROR).json({ message: TEAM_ID_ERROR });
    }

    next();
  }
}
