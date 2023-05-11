import { Router, Request, Response } from 'express';
import MatchesController from '../controllers/MatchesController';
import MatchesService from '../services/MatchesService';
import ValidateToken from '../middlewares/ValidateToken';

const matchesRouter = Router();
const macthesService = new MatchesService();
const macthesController = new MatchesController(macthesService);

matchesRouter.get('/', (req: Request, res: Response) => macthesController.getAll(req, res));
matchesRouter.patch(
  '/:id/finish',
  ValidateToken.isValid,
  (req: Request, res: Response) => macthesController.finishById(req, res),
);

export default matchesRouter;
