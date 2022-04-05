import express from 'express';
import Competitors from '../models/Competitors.models'

export class CompetitorController {
    getAll  = (req: express.Request, res: express.Response) => {
        Competitors.find({}, (err, result)=> {
            if(err) console.log(err);
            else {
                res.json(result);
            }
        })
    }

    insert  = (req: express.Request, res: express.Response) => {
        
        let names = req.body.names;
        let sport = req.body.sport;
        let type = req.body.type;
        let country = req.body.country;
        let gender = req.body.gender;
        let discipline = req.body.discipline;
        Competitors.insertMany({'names':names, 'sport':sport, 'discipline':discipline, 'country':country, 'gender':gender, 'type':type}, (err, result)=> {
            if(err) console.log(err);
            else {
                res.json(result);
            }
        })
    }

    getBySport = (req: express.Request, res: express.Response) => {
        let sport = req.body.sport;
        let type = req.body.type;
        let gender = req.body.gender;
        let discipline = req.body.discipline;

        Competitors.find({'sport':sport, 'discipline':discipline, 'gender':gender, 'type':type}, (err, result)=> {
            if(err) console.log(err);
            else {
                res.json(result);
            }
        })
    }


}