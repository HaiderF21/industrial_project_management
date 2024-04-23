import Todo from "./modules/schema.mjs"
import  express, { query }  from "express";

import dotenv from 'dotenv';

import {mongoose} from "mongoose";
dotenv.config();
const port=3002;
const app = express();
// app.use(express.static(__dirname + '/'));
const connectionString = process.env.DB_URL

mongoose.connect(connectionString).then(()=> console.log('Connect to the DB..')).catch((err)=>console.log(err))

// app.get('/search',(req,res) => {
//   res.render('index.ejs');
// })
app.get('/to-do-app', async(req,res)=> {
    const todos = await Todo.find();
    res.json(todos)
})


app.listen(port,console.log(`Server started at http://localhost:${port}`));