import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';


dotenv.config();

const app =express();

app.use(express.json()); //allows us to accept json data in the req.body

app.post("/api/user", async(req,res) => {
    const user = req.body; //user will send this data

    if(!user.full_name || !user.mobile_no || !user.email || ! user.massage){
        return res.status(400).json({success:false, massage:"Please provide all fields"});
    }

    const newUser = new user(user)
    try{
        await newUser.save();
        res.status(201).json({success: true, data:newUser});

    } catch(error){
        console.error("Error in create user", error.massage);
        res.status(500).json({ success: false, message:"Server Error"});
    }
});

console.log(process.env.MONGO_URL);

app.listen(2500,() => {
    connectDB();
    console.log('server statrted at http://localhost:2500'); 
});

