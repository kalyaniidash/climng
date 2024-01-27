const express=require("express");
//Initializing
const connectDB = require("./config/db");
const cors = require("cors");
//Connect to mongodb
connectDB();
//initiating the app
const app=express();

//Enabling CORSs here for Safety OF access of info from other domains
app.use(cors());
//Handle JSON parsing 
app.use(express.json())

const port= process.env.PORT || 5000;
app.listen(port,()=>
    console.log(`Server is Running on port ${port}`)
);