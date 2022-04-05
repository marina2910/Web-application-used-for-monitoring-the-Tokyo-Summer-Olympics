import express from 'express';
import Location from '../models/Location.models'

export class LocationController {
    getAll  = (req: express.Request, res: express.Response) => {
        Location.find({}, (err, result)=> {
            if(err) console.log(err);
            else {
                res.json(result);
            }
        })
    }
}