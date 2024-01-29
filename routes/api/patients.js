const express =require("express");
///handle all the routes parameter with ease
const router = express.Router();
 router.get("/test",(req,res)=>{
    res.send("test api route is working fine")
 })
 
 //@route GET aoi/books
 //@descripton  give all the patients
 //@access public
 router.get('/', (req, res) => {
  //  patient.find()
   //   .then((patients) => res.json(patients))
  //  .then((patients) => 
  
  //  .catch((err) => res.status(404).json({ nopatientsfound: 'No Patients found' }));
  res.json({ ok:"all patients are there"})
 });


 
 module.exports = router;
