import { Router, Request, Response } from 'express';
import LeaderBoardController from '../controllers/LeaderBoardController';
import LeaderBoardService from '../services/LeaderBoardService';

const leaderBoardRouter = Router();
const leaderBoardService = new LeaderBoardService();
const leaderBoardController = new LeaderBoardController(leaderBoardService);

leaderBoardRouter.get(
  '/home',
  (req: Request, res: Response) => leaderBoardController.getHome(req, res),
);

leaderBoardRouter.get(
  '/away',
  (req: Request, res: Response) => leaderBoardController.getAway(req, res),
);

leaderBoardRouter.get(
  '/',
  (req: Request, res: Response) => leaderBoardController.getAllClass(req, res),
);

export default leaderBoardRouter;
