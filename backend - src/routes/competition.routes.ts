import express from 'express';
import {CompetitionController} from '../controllers/CompetitionController.controllers'

const competitionRouter = express.Router();

competitionRouter.route('/getAll').get((req: express.Request, res: express.Response) => {
    return new CompetitionController().getAll(req, res);
})

competitionRouter.route('/insert').post((req: express.Request, res: express.Response) => {
    return new CompetitionController().insertCompetition(req, res);
})

competitionRouter.route('/exists').post((req: express.Request, res: express.Response) => {
    return new CompetitionController().checkIfExists(req, res);
})

export default competitionRouter;