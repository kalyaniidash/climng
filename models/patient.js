const mongoose = require("mongoose");
const PatientSchema= new mongoose.Schema({
    patient_id:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true  
    },
    address:{
        type: String,
        required: true
    },
    phone_no: {
        type: Number,
    },
    gender:{
         type: String,
         required:true
     },
    age: {
        type: Number,
    },
    join_date: {
        type: Date,
        default: Date.now
    }
})
module.exports = Patient;