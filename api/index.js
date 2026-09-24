const express= require('express')
const app=express()
const cors=require("cors")
const PORT = 3000
const server=require('./server')

server();
app.use(cors())
app.get('/', (req,res)=>{
    res.send('Hi')
    console.log("ok")
})

app.listen(PORT, ()=>{
    console.log("app is listening")
})