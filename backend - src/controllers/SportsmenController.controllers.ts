import express from 'express';
import Sportsmen from '../models/Sportsmen.models';

export class SportsmenControllers {

    getAll = (req: express.Request, res: express.Response) => {

        Sportsmen.find({}, (err, result) => {
            if (err) console.log(err);
            else {
                res.json(result);
            }
        })
    }
    existsSportsman = (req: express.Request, res: express.Response) => {

        let name = req.body.name;
        let country = req.body.country;
        //  console.log('name ' + name + ' country ' + country + ' sport ' + sport);

        const rezultat = Sportsmen.findOne({ 'name': { $regex: name }, 'country': { $regex: country } }, (err, result) => {
            if (err) console.log(err);
            else {
                res.json(result);
            }
        })
    }
    getSelectedSportsman = (req: express.Request, res: express.Response) => {

        let name = req.body.name;
        if (name == '') name = "";
        let country = req.body.country;
        if (country == '') country = "";
        let sport = req.body.sport;
        if (sport == '') sport = "";
        let gender = req.body.gender;
        if (gender == '') gender = "";
        let discipline = req.body.discipline;
        console.log('name ' + name + ' country ' + country + ' sport ' + sport );

        const rezultat = Sportsmen.find({
            'name': { $regex: new RegExp(name) }, 'country': { $regex: new RegExp(country) },
            'sport': { $regex: new RegExp(sport) }, 'discipline': {$all: discipline}, 'gender': { $regex: new RegExp(gender) }
        }, (err, result) => {
            if (err) console.log(err);
            else {
                res.json(result);
            }
        })
    }

    getCountrySportsman = (req: express.Request, res: express.Response) => {

        let country = req.body.country;

        Sportsmen.find({ 'country': country }, (err, result) => {
            if (err) console.log(err);
            else {
                res.json(result);
            }
        })
    }

    insertNewSportsman = (req: express.Request, res: express.Response) => {

        let name = req.body.name;
        let country = req.body.country;
        let sport = req.body.sport;
        let discipline = req.body.discipline;
        let gender = req.body.gender;
        Sportsmen.insertMany({ "name": name, "country": country, "sport": sport, "discipline": discipline, "gender": gender }, (err, result) => {
            if (err) console.log(err);
            else {
                res.json({ 'mess': 'ok' });
            }

        })
    }
    updateSportsman = (req: express.Request, res: express.Response) => {

        let name = req.body.name;
        let country = req.body.country;
        let discipline = req.body.discipline;
        let sport = req.body.sport;
        //  console.log("U UPDATEU SAM AMAN name: " + name + " discipline: " + discipline);

        Sportsmen.updateOne({ "name": name, "country": country, "sport": sport }, { $push: { 'discipline': discipline } }, (err, result) => {
            if (err) console.log(err);
            else {
                res.json({ 'mess': 'ok' })
            }
        })
    }
}