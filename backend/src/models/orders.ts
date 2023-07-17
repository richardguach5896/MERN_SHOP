import mongoose from 'mongoose';
import { User } from './user';
import { OrderItem } from "./orderItem";

const ordersSchema = new mongoose.Schema({
    id:{type:String, require:true},
    orderItem:{type:[OrderItem], require:true},
    shippingAddress1:{type:String, require:true},
    shippingAddress2:{type:String, require:true},
    city:{type:String, require:true},
    zip:{type:String, require:true},
    country:{type:String, require:true},
    phone:{type:Number, require:true},
    status:{type:String, require:true},
    totalPrice:{type:Number, require:true},
    user:{type:User, require:true},
    dateOrdered:{type:Date, require:true},
  


});

export const Orders = mongoose.model('Orders', ordersSchema);