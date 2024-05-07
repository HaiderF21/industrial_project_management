
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routes from './routes/adminroutes.mjs';
import AdminModel from './models/AdminModel.mjs';
import cors from "cors"
dotenv.config();
mongoose.connect(process.env.adminURI).then(()=>{console.log("Db Conected")}).catch((e)=>{console.log("Db  not Connected")});
const app = express();
app.use(express.json());
app.use(cors({
    origin:  "http://localhost:3000",
 credentials: true // if needed
}))

app.use('/api',routes);
const port = 3004;
/*app.get("/",(req,res)=>{
    res.send("Hello Admin");
})
*/


app.listen(port,console.log("http://localhost:3004/"));