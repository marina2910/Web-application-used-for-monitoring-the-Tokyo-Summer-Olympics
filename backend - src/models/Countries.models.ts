
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Country = new Schema ({
    name : {
        type: String
    },
    nationality: {
        type: String
    },
    abr: {
        type: String
    },
    totalSportsmen: {
        type: Number
    },
    golden: {
        type: Number
    },
    silver: {
        type: Number
    },
    bronze: {
        type: Number
    }
})

export default mongoose.model('Country', Country, 'countries')