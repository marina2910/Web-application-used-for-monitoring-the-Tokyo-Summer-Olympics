import express from 'express';
import Competition from '../models/Competition.models'


export class CompetitionController {


    getAll = (req: express.Request, res: express.Response) => {
        Competition.find({}, (err, result) => {
            if (err) console.log(err);
            else {
                res.json(result);
            }
        })
    }

    insertCompetition = (req: express.Request, res: express.Response) => {
        
        let sport = req.body.sport;
        let discipline = req.body.discipline;
        let location = req.body.location;
        let startDate = req.body.startDate;
        let endDate = req.body.endDate;
        let type = req.body.type;
        let competitors = req.body.competitors;
        let delegate = req.body.delegate;
        let minSportsmen = req.body.minSportsmen;
        let maxSportsmen = req.body.maxSportsmen;
        let resultType = req.body.resultType;
        let roundNumber = req.body.roundNumber;
        let gender = req.body.gender;
        let identificator = req.body.identificator;
        console.log("Pre inc " + identificator);                

        Competition.insertMany({
            'identificator' : identificator,
            'sport': sport, 'discipline': discipline,
            'location': location, 'startDate': startDate, 'endDate': endDate,
            'type': type, 'competitors': competitors, 'delegate': delegate,
            'minSportsmen': minSportsmen, 'maxSportsmen': maxSportsmen,
            'resultType': resultType, 'roundNumber': roundNumber,
            'gender': gender
        }, (err, result) => {
            if (err) console.log(err);
            else {
                identificator++;
                console.log("Posle inc " + identificator);                
                res.json({ 'mess': 'ok' });
            }
        })
    }

    checkIfExists = (req: express.Request, res: express.Response) => {
        let sport = req.body.sport;
        let discipline = req.body.discipline;
        let type = req.body.type;
        let gender = req.body.gender
        Competition.findOne({
            'sport': sport, 'discipline': discipline,
            'gender': gender, 'type': type
        }, (err, result) => {
            if (err) console.log(err);
            else {
                res.json(result);
            }
        })
    }


}