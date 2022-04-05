import express from 'express';
import User from '../models/User.models';

export class UserControllers {
    login = (req: express.Request, res: express.Response) => {


        let username = req.body.username;
        let password = req.body.password;
        console.log(username + " " + password);
        User.findOne({ 'username': username, 'password': password }, (err, user) => {
            if (err) console.log(err);
            else {
                if (user) console.log('ok')
                else console.log('not ok')
                res.json(user)
            }
        })
    }

    changePass = (req: express.Request, res: express.Response) => {
        let username = req.body.username;
        let oldPass = req.body.oldPassword;
        let newPass = req.body.newPassword;

        console.log(username + " " + newPass);
        User.updateOne({ "username": username, "password": oldPass }, { $set: { "password": newPass } }
        ).then(result => {
            const { matchedCount, modifiedCount } = result;
            if (matchedCount && modifiedCount) {
                res.json({ 'mess': 'ok' })
            } else {
                res.json({ 'mess': 'bad' })
            }
        })
            .catch(err => console.error(`Failed to add review: ${err}`))
    }

    register = (req: express.Request, res: express.Response) => {
        let newUser = new User(req.body);


        console.log(JSON.stringify(newUser))
        User.insertMany(newUser, (err, result) => {
            if (err) {
                res.json({ 'mess': 'bad' });
                console.log('Error has occured ' + err);
            }
            else {
                res.json({ 'mess': 'ok' })
            }
        })


    }

    getAll = (req: express.Request, res: express.Response) => {
        User.find({}, (err, result) => {
            if (err) console.log(err);
            else {
                if (result) console.log('ok')
                else console.log('not ok')
                res.json(result);
            }
        })
    }

    approve = (req: express.Request, res: express.Response) => {
        let username = req.body.username;
        User.updateOne({ "username": username }, { $set: { "approved": true } }).then(result => {
            const { matchedCount, modifiedCount } = result;
            if (matchedCount && modifiedCount) {
                console.log('sve je ok')
                res.json({ 'mess': 'ok' })
            } else {
                res.json({ 'mess': 'bad' })
            }
        })
            .catch(err => console.error(`Failed to add review: ${err}`))
    }

    
    decline = (req: express.Request, res: express.Response) => {
        let username = req.body.username;
        User.deleteOne({ "username": username }).then(result => {
            const { matchedCount, modifiedCount } = result;
            if (matchedCount && modifiedCount) {
                console.log('sve je ok')
                res.json({ 'mess': 'ok' })
            } else {
                res.json({ 'mess': 'bad' })
            }
        })
            .catch(err => console.error(`Failed to add review: ${err}`))
    }
}