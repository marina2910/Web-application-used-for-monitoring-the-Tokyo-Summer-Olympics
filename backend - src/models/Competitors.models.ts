
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Competitors = new Schema ({
    names : {
        type: Array<String>()
    },
    sport: {
        type: String
    },
    discipline: {
        type: String
    },
    country: {
        type: String
    },
    gender: {
        type: String
    },
    type: {
        type: String
    }
})

export default mongoose.model('Competitors', Competitors, 'competitors')