import express from 'express';
import Country from '../models/Countries.models'

export class CountryController {
    getAll  = (req: express.Request, res: express.Response) => {
        Country.find({}, (err, result)=> {
            if(err) console.log(err);
            else {
                res.json(result);
            }
        })
    }
}