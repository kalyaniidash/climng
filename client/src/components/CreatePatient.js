// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const CreatePatient = (props) => { 
  // Define the state with useState hook
 
  const onSubmit = (e) => {
    //prevent the page for refreshing
    e.preventDefault();
    //api calls with the help of axios
    // axios.post("api/patients",patient).then((res)=>{
    //    setPatient({
    //     patient_id:"",
    //     name:"",
    //     address:"",
    //     phone_no:"",
    //     gender:"",
    //     age:"",
    //     join_date:"",
    //    });
    // })
  }
  return (
    <div className='CreatePatient'>
      <div className='container'>
        <div className='row'>
        <div className='col-md-8 m-auto'>
            <br />
            <Link to='/all-patient' className='btn btn-outline-warning float-left'>
              Show Patient List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Patient</h1>
            <p className='lead text-center'>Create new patient</p>
            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='number'
                  placeholder='enter your id'
                  name='patient_id'
                  className='form-control'
                  // value={Patient.title}
                  // onChange={onChange}
                />
                </div>
                </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CreatePatient;