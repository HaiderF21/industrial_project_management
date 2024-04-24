import mongoose from "mongoose";
import {dotenv} from 'dotenv';
dotenv.config();
import {adminModel} from "../models/AdminModel.mjs";

const adminconnection = process.env.adminURI;
 
//mongoose.connect(adminconnection).then(()=>{console.log("Db Conected")}).catch((e)=>{console.log("Db  not Connected")});

