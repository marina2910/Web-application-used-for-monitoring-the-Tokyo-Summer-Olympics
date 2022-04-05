import express from 'express';
import { SportControllers } from '../controllers/SportsController.controller';

const sportsRouter = express.Router();

sportsRouter.route('/getAll').get((req: express.Request, res: express.Response) => {
    return new SportControllers().getAll(req, res);
})

sportsRouter.route('/addSport').post((req: express.Request, res: express.Response)=> {
    return new SportControllers().addSport(req, res);
})

sportsRouter.route('/exists').post((req: express.Request, res: express.Response)=> {
    return new SportControllers().checkIfExists(req, res);
})

sportsRouter.route('/update').post((req: express.Request, res: express.Response)=> {
    return new SportControllers().updateSport(req, res);
})
export default sportsRouter