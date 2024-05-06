import express from "express";
import AdminModel from "../models/AdminModel.mjs";
import bcrypt from "bcrypt";
const routes = express.Router();

const saltRounds = 10;
const hashPassword = async(password)=>{
    return await bcrypt.hash(password,saltRounds);
} 

routes.get('/',async(req,res)=>{
    
    res.send(await AdminModel.find({}));
});

routes.post('/SignUp', async (req, res) => {
    const { Username, Password, Email, Name, Age } = req.body;
    try {
      const hashedPassword = await hashPassword(Password);
      const user = new AdminModel({
        Username: Username,
        Password: hashedPassword, // Store hashed password in the database
        Email: Email,
        Name: Name,
        Age: Age
      });
      const dataSave = await user.save();
      res.status(200).json(dataSave);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  

/*
routes.post('/SignUp',async(req,res)=>
{
    const {Username,Password,Email,Name,Age} = req.body;
    const user = new AdminModel(
        {
            Username:Username,
            Password:Password,
            Email:Email,
            Name:Name,
            Age:Age
        }
    );
    try
    {
        const dataSave = await user.save();
        res.status(200).json(dataSave);
    }
    catch(e)
    {
        res.status(400).json({message:e.message});
    }
});
*/
routes.post('/login',async(req,res)=>
{
    const {Email,Password} = req.body;
    const password = await hashPassword(Password);
    try{
    const result = await AdminModel.findOne({Email:Email,Password:password});
    res.status(200).json(result);   
}
catch(e)
{
    res.status(400).json({message:e.message});
}
});

export default routes;