import express from 'express';
import { CountryController } from '../controllers/CountriesController.controllers';

const countryRouter = express.Router();

countryRouter.route('/getAll').get((req: express.Request, res: express.Response) => {
    return new CountryController().getAll(req, res);
})

export default countryRouter;