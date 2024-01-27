const express =require("express");
///handle all the routes parameter with ease
const router = express.Router();
 router.get("/test",(req,res)=>{
    res.send("test api route is working fine")
 })
 module.exports = router;
