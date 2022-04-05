
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Sports = new Schema ({
    name : {
        type: String
    },
    discipline: {
        type: Array<String>()
    },
    type: {
        type: String
    },
    min: {
        type: Number
    },
    max: {
        type: Number
    }
})

export default mongoose.model('Sports', Sports, 'sports')