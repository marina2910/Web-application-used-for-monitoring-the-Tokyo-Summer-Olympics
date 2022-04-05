
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Matches = new Schema ({
    competitionId : {
        type: Number
    },
    location: {
        type: String
    },
    groupPhase: {
        type: Array<Date>()
    },
    sixteen: {
        type: Array<Date>()
    },
    eight: {
        type: Array<Date>()
    },
    quarter: {
        type: Array<Date>()
    },
    semi: {
        type: Array<Date>()
    },
    final: {
        type: Date
    }
})

export default mongoose.model('Matches', Matches, 'matches')