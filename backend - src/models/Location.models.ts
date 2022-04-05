
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Location = new Schema ({
    name : {
        type: String
    }
})

export default mongoose.model('Location', Location, 'location')