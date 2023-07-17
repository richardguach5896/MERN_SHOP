import mongoose from 'mongoose';
import { Category } from './category';


const productSchema = new mongoose.Schema({
    name: {type: String,},
    image: {type: String,},
    description: {type: String,},
    richDescription: {type: String,},
    images: {type: [String],},
    brand: {type: String,},
    stock: {type: Number,},
    price: {type: Number,},
    //category: { type: Category ,},
    countInStock:{type:Number,},
    rating:{type:Number,},
    isFeatured:{type:Boolean,},
    dateCreated:{type:Date,},

});



export const Product = mongoose.model('Product', productSchema);