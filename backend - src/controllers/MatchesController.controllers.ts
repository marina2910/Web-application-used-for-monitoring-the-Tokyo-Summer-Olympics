import express from 'express';
import Matches from '../models/Matches.models'

export class MatchesController {
    getAll  = (req: express.Request, res: express.Response) => {
        Matches.find({}, (err, result)=> {
            if(err) console.log(err);
            else {
                res.json(result);
            }
        })
    }
}