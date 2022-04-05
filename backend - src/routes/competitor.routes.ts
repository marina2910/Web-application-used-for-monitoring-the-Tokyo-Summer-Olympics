import express from 'express';
import {CompetitorController} from '../controllers/CompetitorsController.controllers'

const competitorRouter = express.Router();

competitorRouter.route('/getAll').get((req: express.Request, res: express.Response) => {
    return new CompetitorController().getAll(req, res);
})

competitorRouter.route('/insert').post((req: express.Request, res: express.Response) => {
    return new CompetitorController().insert(req, res);
})
competitorRouter.route('/getBySport').post((req: express.Request, res: express.Response) => {
    return new CompetitorController().getBySport(req, res);
})
export default competitorRouter;