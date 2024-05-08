//Require mongoose
// const mongoose = require('mongoose'); 
import dotenv from 'dotenv';

import {mongoose} from "mongoose";
dotenv.config();

//Create schema contains a single field named 'name.' 
//The 'name' field is of type String
const UserModule = new mongoose.Schema( {password: String, UiD: String,Email :String,Username: String} ); 

//Export the Mongoose model with the collection name "Todo"
export default mongoose.model('UserModule', UserModule);
