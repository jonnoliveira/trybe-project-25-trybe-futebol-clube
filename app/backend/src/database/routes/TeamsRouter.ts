import { Router, Request, Response } from 'express';
import TeamsController from '../controllers/TeamsController';
import TeamsService from '../services/TeamsService';

const teamsRouter = Router();
const teamsService = new TeamsService();
const teamsController = new TeamsController(teamsService);

teamsRouter.get('/', (req: Request, res: Response) => teamsController.getAll(req, res));

teamsRouter.get('/:id', (req: Request, res: Response) => teamsController.getById(req, res));

export default teamsRouter;
