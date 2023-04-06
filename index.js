const express=require("express");
const {connection} = require("./db");
const {userRouter} = require("./routes/users.route")
const {appointmentRouter} =require("./routes/appointments.route")
require("dotenv").config();
const app=express();
const cors=require("cors");
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.send("Home Page");
})
app.use("/user",userRouter);
app.use("/appointments",appointmentRouter);
app.listen(process.env.port,async()=>{
    try{
        await connection;
        console.log("Connected");
    }catch(err){
        console.log("ERROR:",err);
    }
    console.log("Port running at 8080");
})