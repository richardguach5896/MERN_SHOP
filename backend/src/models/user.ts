import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        default: ''
    }
});

export const User = mongoose.model('User', userSchema);