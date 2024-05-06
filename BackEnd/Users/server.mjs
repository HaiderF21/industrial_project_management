import UserModule from "./modules/schema.mjs"
import  express  from "express";
import cors from "cors"
import dotenv from 'dotenv';
import projectschema from "./modules/projectschema.mjs";
import {mongoose} from "mongoose";
dotenv.config();
const port=3002;
const app = express();
app.use(cors({
    origin: 'http://localhost:3030'
}))
app.use(express.json())
const connectionString = process.env.DB_URL

mongoose.connect(connectionString).then(()=> console.log('Connect to the DB..')).catch((err)=>console.log(err))
app.get('/Data', async(req,res)=>{
    try{

        const result= await UserModule.find();
        if(result){

            res.status(200).json(result);
        }
    }
catch(e){
    res.status(400).json({message:e.message})
}
})

app.post('/Login', async(req,res)=> {
    const {Email,password}=req.body;
    try{

        const result= await UserModule.findOne({Email:Email,password:password});
        if(result){

            res.status(200).json(result);
        }
        else{
            throw new Error('Network response was not ok'); 
        }
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
const result= await UserModule.findOne({Email:Email})
if(result){
    
    res.status(409).json("already Exist")
}
else{
    try{
        const dataSave= await user.save();
        res.status(200).json(dataSave);
    }
    catch(e){
        res.status(400).json({message:e.message});   
    }
    
}
})
app.post('/projects', async (req, res) => {
    try {
      const { projectName, description, startDate, endDate, fundingDetails } = req.body;
  
      const project = new projectschema({
        projectName,
        description,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        fundingDetails,
      });
  
   
      const newProject = await project.save();
  
      res.status(201).json(newProject); 
    } catch (err) {
      console.error('Error creating project:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
app.listen(port,console.log(`Server started at http://localhost:${port}`));