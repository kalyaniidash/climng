import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ShowPatientList from './ShowPatientList';
import Navbar from './Navbar';
import Footer from './Footer';
 

const CreatePatient = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [patient, setPatient] = useState({
    Patient_id: '',
    Name: '',
    Address: '',
    Phone_no: '',
    Gender: '',
    Age: '',
  });
  const [showToast, setShowToast] = useState(false);

  const onChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
   // prevent the page from refreshing
    e.preventDefault();
    //API calls with the help of axios
    axios
      .post('/api/patients', patient)
      .then((res) => {
        setPatient({
          patient_id: '',
          name: '',
          address: '',
          phone_no: '',
          gender: '',
          age: '',
          join_date: '',
        });
      })
      
    }

  return (
    <div className='CreatePatient'>
      <Navbar/>
      <div className='container'>
        <div className='row'>
        <div className='col-md-8 m-auto'>
            <br />
            <Link to='/all-patient ' className='btn btn-outline-warning float-left'>
              show Patient List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Patient</h1>
            <p className='lead text-center'>Create new Patient</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='number'
                  placeholder='Enter Your ID'
                  name='patient_id'
                  className='form-control'
                  value={patient.id}
                  onChange={onChange}
                />
                
            </div>
            <div className='form-group'>
                <input
                  type='text'
                  placeholder='Enter Your Name'
                  name='patient_name'
                  className='form-control'
                  value={patient.name}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Enter Your Address'
                  name='patient_address'
                  className='form-control'
                  value={patient.address}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='number'
                  placeholder='Enter Your Phone.no'
                  name='patient_phnno.'
                  className='form-control'
                  value={patient.phnno}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Enter Your Gender'
                  name='patient_gender'
                  className='form-control'
                  value={patient.gender}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='number'
                  placeholder='Enter Your Age'
                  name='patient_age'
                  className='form-control'
                  value={patient.age}
                  onChange={onChange}
                />
              </div>



            </form>
            
              </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default CreatePatient;