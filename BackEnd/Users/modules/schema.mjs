//Require mongoose
// const mongoose = require('mongoose'); 
import dotenv from 'dotenv';

import {mongoose} from "mongoose";
dotenv.config();

//Create schema contains a single field named 'name.' 
//The 'name' field is of type String
const TodoSchema = new mongoose.Schema( {paasword: String, roll: String,email :String,Username: String,marks:Number} ); 

//Export the Mongoose model with the collection name "Todo"
export default mongoose.model('Todo', TodoSchema);
