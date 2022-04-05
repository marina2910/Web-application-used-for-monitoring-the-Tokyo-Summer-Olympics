import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './routes/user.routes';
import countryRouter from './routes/countries.routes';
import sportsRouter from './routes/sports.routes';
import sportsmenRouter from './routes/sportsmen.routes';
import competitorRouter from './routes/competitor.routes';
import locationRouter from './routes/location.routes';
import competitionRouter from './routes/competition.routes';



const app = express();

app.use(cors());
app.use(bodyParser.json())


mongoose.connect('mongodb://localhost:27017/olimpijada');
const connection = mongoose.connection;

connection.once('open', () => {
    console.log("mongo ok");
})



const router = express.Router();
router.use('/users', userRouter)
router.use('/countries', countryRouter)
router.use('/sport', sportsRouter)
router.use('/sportsmen', sportsmenRouter);
router.use('/competitors', competitorRouter);
router.use('/location', locationRouter)
router.use('/competition', competitionRouter)

app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));