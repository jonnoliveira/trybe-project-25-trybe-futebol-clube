import { Router, Request, Response } from 'express';
import MatchesController from '../controllers/MatchesController';
import MatchesService from '../services/MatchesService';
import ValidateToken from '../middlewares/ValidateToken';
import ValidateMatch from '../middlewares/ValidateMatch';

const matchesRouter = Router();
const macthesService = new MatchesService();
const macthesController = new MatchesController(macthesService);

matchesRouter.patch(
  '/:id/finish',
  ValidateToken.isValid,
  (req: Request, res: Response) => macthesController.finishById(req, res),
);

matchesRouter.patch(
  '/:id',
  ValidateToken.isValid,
  (req: Request, res: Response) => macthesController.updateById(req, res),
);

matchesRouter.get('/', (req: Request, res: Response) => macthesController.getAll(req, res));

matchesRouter.post(
  '/',
  ValidateToken.isValid,
  ValidateMatch.isValid,
  (req: Request, res: Response) => macthesController.create(req, res),
);

export default matchesRouter;
