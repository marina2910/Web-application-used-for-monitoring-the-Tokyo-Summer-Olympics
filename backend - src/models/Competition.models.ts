
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Competition = new Schema({
    identificator: {
        type: Number
    },
    sport: {
        type: String
    },
    discipline: {
        type: String
    },
    location: {
        type: String
    },
    gender: {
        type: String
    }, 
    startDate: {
        type: Date
    }, 
    endDate: {
        type: Date
    },
    type: {
        type: String
    },
    competitors: {
        type: Array<String>()
    },    
    delegate: {
        type: String
    },
    minSportsmen: {
        type: Number
    },
    maxSportsmen: {
        type: Number
    },
    resultType: {
        type: String
    },
    roundNumber: {
        type: Number
    }

})

export default mongoose.model('Competition', Competition, 'competition')