
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let User = new Schema ({
    username : {
        type: String
    },
    password : {
        type: String
    },
    name : {
        type: String
    },
    surname: {
        type: String
    },
    email: {
        type: String
    },
    country: {
        type: String
    },
    type: {
        type: Number
    },
    approved: {
        type: Boolean
    }
})

export default mongoose.model('User', User, 'users')