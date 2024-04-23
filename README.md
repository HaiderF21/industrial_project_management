# industrial_project_management
db_uri = mongodb+srv://f219409:pIwzaz5bp4QLmlpr@newcluster.xfricxc.mongodb.net/?retryWrites=true&w=majority

mongoose.connect(process.env.adminURI).then(()=>{console.log("Db Conected")}).catch((e)=>{console.log("Db  not Connected")});
