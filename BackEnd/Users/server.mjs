import UserModule from "./modules/schema.mjs"
import  express, { query }  from "express";

import dotenv from 'dotenv';

import {mongoose} from "mongoose";
dotenv.config();
const port=3002;
const app = express();
app.use(express.json())
const connectionString = process.env.DB_URL

mongoose.connect(connectionString).then(()=> console.log('Connect to the DB..')).catch((err)=>console.log(err))


app.get('/Login', async(req,res)=> {
    const {Email,password}=req.body;
    try{

        const result= await UserModule.findOne({Email:Email,password:password});
        res.status(200).json(result);
    }
catch(e){
    res.status(400).json({message:e.message})
}
})


app.post('/SignUp',async(req,res)=>{
const {password,Email,Username}=req.body;
const user = new UserModule({
Email:Email,
Username:Username,
password:password
})
try{
    const dataSave= await user.save();
    res.status(200).json(dataSave);
}
catch(e){
    res.status(400).json({message:e.message});   
}
})

app.listen(port,console.log(`Server started at http://localhost:${port}`));