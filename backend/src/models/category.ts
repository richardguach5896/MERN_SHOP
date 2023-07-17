import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
    },
    color: {
        type: String,
    },
    icon: {
        type: String,
    },
    image: {
        type: String,
    }
});

export const Category = mongoose.model('Category', categorySchema);