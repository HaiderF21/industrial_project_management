import express from "express";
import AdminModel from "../models/AdminModel.mjs";

const routes = express.Router();

routes.get('/',async(req,res)=>{
    
    res.send(await AdminModel.find({}));
});

routes.post('/SignUp/',async(req,res)=>
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

routes.get('/login',async(req,res)=>
{
    const {UserName,PassWord} = req.body;
    try{
    const result = await AdminModel.findOne({Username:UserName,Password:PassWord});
    res.status(200).json(result);   
}
catch(e)
{
    res.status(400).json({message:e.message});
}
});

export default routes;