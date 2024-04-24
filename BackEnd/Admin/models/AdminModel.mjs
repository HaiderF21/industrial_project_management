import mongoose from "mongoose";
//import {dotenv} from "dotenv"
const AdminSchema = new mongoose.Schema(

    {
        Username : String,
        Email : String,
        Password  : String,
        Name : String,
        Age : Number
    }
);

export default mongoose.model('AdminSchema',AdminSchema);
//export default adminModel;

