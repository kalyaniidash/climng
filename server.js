const express=require("express");
//Initializing
const connectDB = require("./config/db");
const cors = require("cors");
const patients =require("./routes/api/patients");
//Connect to mongodb
// connectDB();
//initiating the app
const app=express();

//Enabling CORSs here for Safety OF access of info from other domains
app.use(cors());
//Handle JSON parsing 
app.use(express.json({
    extended:false
}))
//use the api group instead of multiple paths for multiple routes
app.use("/api/patients",patients)
const port= process.env.PORT || 5000;
app.listen(port,()=>
    console.log(`Server is Running on port ${port}`)
);