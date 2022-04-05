
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Sportsmen = new Schema ({
    name : {
        type: String
    },
    country: {
        type: String
    },
    sport: {
        type: String
    },
    discipline: {
        type: Array<String>()
    },
    gender: {
        type: String
    }
})

export default mongoose.model('Sportsmen', Sportsmen, 'sportsmen')