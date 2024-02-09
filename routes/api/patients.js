const express =require("express");
///handle all the routes parameter with ease
const router = express.Router();
 router.get("/test",(req,res)=>{
    res.send("test api route is working fine")
 })
 
 //@route GET api/patients
 //@descripton  give all the patients
 //@access public
 router.get('/', (req, res) => {
  //  patient.find()
   //   .then((patients) => res.json(patients))
   
  
  //  .catch((err) => res.status(404).json({ nopatientsfound: 'No Patients found' }));
  res.json({ ok:"all patients are there"})
 });

 
// @route GET api/patients/:id
// @description Get single patient by id
// @access Public
//READ ACCESS
router.get('/:id', (req, res) => {
   // Patient.findById(req.params.id)
   // .then((patients) => res.json(patient))
   // .catch((err) => res.status(404).json({ nopatientfound: 'No patient found' }));
   res.json({
       ok:"GET the patients by id"})
});

// @route POST api/patients
// @description add/save patient
// @access Public
//CREATE ACCESS
router.post('/', (req, res) => {
//    Patient.create(req.body)
//      .then((patient) => res.json({ 
//       msg: 'patient added successfully' }))
//      .catch((err) => res.status(400).json({ 
//       error: 'Unable to add this patient' }));
//  });
 res.json({
   ok:"patients created successfully"})
});

// @route GET api/patients/:id
// @description Update patient
// @access Public
//READ,UPDATE SEARCH operation
router.put('/:id', (req, res) => {
//    Patient.findByIdAndUpdate(req.params.id, req.body)
//      .then((patient) => res.json({
//        msg: 'Updated successfully' }))
//      .catch((err) =>
//        res.status(400).json({ 
//          error: 'Unable to update the Database' })
//      );
//  });
 res.json({
   ok:"update the patients by id  successfully"})
});


// @route GET api/patients/:id
// @description find a patient by id and deleted
// @access Public
router.delete('/:id', (req, res) => {
//    Patient.findByIdAndRemove(req.params.id, req.body)
//      .then((patient) => res.json({ mgs: 'Patient entry deleted successfully' }))
//      .catch((err) => res.status(404).json({ error: 'couldnt deletethis patient' }));
//  });
 
 res.json({
   ok:"this patient deleted "})
});

 module.exports = router;
