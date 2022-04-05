import express from 'express';
import { SportsmenControllers } from '../controllers/SportsmenController.controllers';

const sportsmenRouter = express.Router();

sportsmenRouter.route('/getAll').get((req: express.Request, res: express.Response) => {
    return new SportsmenControllers().getAll(req, res);
})

sportsmenRouter.route('/selected').post((req: express.Request, res: express.Response) => {
    return new SportsmenControllers().getSelectedSportsman(req, res);
})

sportsmenRouter.route('/countrySportsmen').post((req: express.Request, res: express.Response) => {
    return new SportsmenControllers().getCountrySportsman(req, res);
})

sportsmenRouter.route('/insert').post((req: express.Request, res: express.Response) => {
    return new SportsmenControllers().insertNewSportsman(req, res);
})


sportsmenRouter.route('/update').post((req: express.Request, res: express.Response) => {
    return new SportsmenControllers().updateSportsman(req, res);
})


sportsmenRouter.route('/exists').post((req: express.Request, res: express.Response) => {
    return new SportsmenControllers().existsSportsman(req, res);
})
export default sportsmenRouter