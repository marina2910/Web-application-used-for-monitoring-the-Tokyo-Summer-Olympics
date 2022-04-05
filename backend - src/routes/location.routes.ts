import express from 'express';
import { LocationController } from '../controllers/LocationController.controllers';

const locationRouter = express.Router();

locationRouter.route('/getAll').get((req: express.Request, res: express.Response) => {
    return new LocationController().getAll(req, res);
})

export default locationRouter;