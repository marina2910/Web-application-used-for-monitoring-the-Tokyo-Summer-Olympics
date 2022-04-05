import express from 'express';
import Sports from '../models/Sports.models';

export class SportControllers {

    getAll = (req: express.Request, res: express.Response) => {


        Sports.find({}, (err, result) => {
            if (err) console.log(err);
            else {
                res.json(result);
            }
        })
    }

    checkIfExists = (req: express.Request, res: express.Response) => {
        let name = req.body.name;

        Sports.findOne({ "name": name }, (err, result) => {
            if (err) console.log(err);
            else {
                res.json(result)
            }
        })
    }

    updateSport = (req: express.Request, res: express.Response) => {
        let name = req.body.name;
        let discipline = req.body.discipline;

        Sports.updateOne({ "name": name },{ $push: { 'discipline': discipline } }, (err, result) => {
            if (err) console.log(err);
            else {
                res.json({'mess':'ok'})
            }
        })
    }

    getSport = (req: express.Request, res: express.Response) => {
        let name = req.body.name;
        let discipline = req.body.discipline;
        Sports.findOne({ "name": name, "discipline": discipline }, (err, result) => {
            if (err) console.log(err);
            else {
                res.json({ 'mess': 'ok' })
            }
        })
    }
    addSport = (req: express.Request, res: express.Response) => {
        let name = req.body.name;
        let discipline = req.body.discipline;
        let type = req.body.type;
        let min = req.body.min;
        let max = req.body.max;
        Sports.insertMany({ "name": name, "discipline": discipline, "type": type, "min": min, "max": max }, (err, result) => {
            if (err) console.log(err);
            else {
                res.json({ 'mess': 'ok' })
            }
        })
    }
}