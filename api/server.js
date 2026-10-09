const mongoose=require('mongoose')
const uri= process.env.MONGO_URI

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
