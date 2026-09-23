const mongoose=require('mongoose')
const uri='mongodb+srv://ddeeppanshuj229_db_user:ybV0a5XcoBgs9RN8@cluster.yburbtd.mongodb.net/?appName=Cluster'

function server(){
mongoose.connect(uri)
.then(()=>{
    console.log("connection established")
})
.catch((error)=>{
    console.error("failed: ",error);
    
})
}

module.exports=server;