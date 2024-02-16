import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ShowPatientList from './ShowPatientList';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './Navbar';
import Footer from './Footer';


const CreatePatient = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [patient, setPatient] = useState({
    id: '',
    name: '',
    address: '',
    phone_no: '',
    gender: '',
    age: '',
    join_date: '',
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
          id: '',
          name: '',
          address: '',
          phone_no: '',
          gender: '',
          age: '',
          join_date: '',
        });
        //show the success alert
        toast.success('Patient added successfully!', {
          position: "top-right",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: { Slide },
        });

        // Delay the navigation slightly to allow the toast to be seen
        setTimeout(() => {
          setShowToast(false); // Hide the toast
          navigate('/'); // Navigate to homepage
        }, 500); // Adjust the timeout as needed

      })
      .catch((err) => {
        console.log('Error in Create Patient!');
        console.log('The error is -> ')
        console.log(err)
        // Show the success alert
        toast.error('Something went wrong, try again!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
          });
        });
      };
  
  // Define the state with useState hook
  return (
    <div className='CreatePatient'>
      <Navbar />
      {
       <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      /> 
      }

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
                  name='id'
                  className='form-control'
                  value={patient.id}
                  onChange={onChange}
                />

              </div>
              <div className='form-group'>
                {/* The type is "String" in model but "text" in component */}
                <input
                  type='text'
                  placeholder='Enter Your Name'
                  name='name'
                  className='form-control'
                  value={patient.name}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Enter Your Address'
                  name='address'
                  className='form-control'
                  value={patient.address}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='number'
                  placeholder='Enter Your Phone.no'
                  name='phone_no'
                  className='form-control'
                  value={patient.phone_no}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Enter Your Gender'
                  name='gender'
                  className='form-control'
                  value={patient.gender}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='number'
                  placeholder='Enter Your Age'
                  name='age'
                  className='form-control'
                  value={patient.age}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='date'
                  placeholder='Enter Your Join-Date'
                  name='join_date'
                  className='form-control'
                  value={patient.join_date}
                  onChange={onChange}
                />
              </div>
              <input
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
              />


            </form>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreatePatient;