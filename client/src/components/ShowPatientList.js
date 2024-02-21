import React, { useState, useEffect } from 'react'

import '../App.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ClimngCard from './climngcard'
import Navbar from './Navbar'
import Footer from './Footer'

function ShowPatientList() {
  const [patients, setPatients] = useState([])

  useEffect(() => {
    axios
      .get(`/api/patients`)
      .then((res) => {
        setPatients(res.data)
      })
      .catch((err) => {
        console.log('Error From ShowpatientList')
        console.log(err)
      })
  },[])

  const PatientList = 
    patients.length === 0
     ? 'there is no patient record!'
     : patients.map((patient, k) => <ClimngCard patient={patient} key={k} />)

  return (
   <div className='ShowPatientList'>
    <Navbar/>
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <br />
          <h2 className='display-4 text-center'>Patients List</h2>

        </div>

        <div className='col-md-11'>
          <Link to='/create-patient' className='btn  float-right button'>
            + Add New Patient
          </Link>
          <br />
          <br />
          <hr />
        </div>
        </div>

        <div className='list'>{PatientList} </div>
  
    </div>
    <Footer/>
   </div>


  )
}

export default ShowPatientList