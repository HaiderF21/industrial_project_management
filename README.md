# industrial_project_management
db_uri = mongodb+srv://f219409:pIwzaz5bp4QLmlpr@newcluster.xfricxc.mongodb.net/?retryWrites=true&w=majority

mongoose.connect(process.env.adminURI).then(()=>{console.log("Db Conected")}).catch((e)=>{console.log("Db  not Connected")});


![image](https://github.com/HaiderF21/industrial_project_management/assets/145140651/020e2066-9830-4719-b6a2-9deccb81b7a6)



![image](https://github.com/HaiderF21/industrial_project_management/assets/145140651/66e79f5a-f153-45cd-9ef0-869fd6742b0b)



................................................................................How i did it.................................................................................................................

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
.............................................................................................................................................................................................................
