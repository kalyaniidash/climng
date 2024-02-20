import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';
import axios from 'axios';
import Footer from './Footer';
import Navbar from './Navbar';

function ShowPatientDetails(props) {
  const [patient, setPatient] = useState({});
  const [showToast, setShowToast] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/api/patients/${id}`)
      .then((res) => {
        setPatient(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowBookDetails');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`/api/patients/${id}`)
      .then((res) => {

        // Show the success alert
        toast.success('Patient deleted!', {
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

        // Delay the navigation slightly to allow the toast to be seen
        setTimeout(() => {
          setShowToast(false); // Hide the toast
          navigate('/'); // Navigate to homepage
        }, 5000); // Adjust the timeout as needed
      })
      .catch((err) => {
        console.log('Error in CreatePatient!');
        console.log('The error is -> ')
        console.log(err)
        // Show the success alert
        toast.error('Error while deleting the book, please try again!', {
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

  return (
    <div className='ShowPatientDetails'>
      <Navbar />
      <br /><br /><br/>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />

      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <h1 className='display-4 text-center'>Patient's Record</h1>
            <p className='lead text-center'>View Patient's Info</p>
            <hr />
            <div className='row justify-content-center'>
              <div className='col-md-12'>
                <table className='table table-striped table-bordered table-dark'>
                  <tbody>
                    <tr>
                      <th scope='row'>Id</th>
                      <td>{patient.id}</td>
                    </tr>
                    <tr>
                      <th scope='row'>Name</th>
                      <td>{patient.name}</td>
                    </tr>
                    <tr>
                      <th scope='row'>Address</th>
                      <td>{patient.address}</td>
                    </tr>
                    <tr>
                      <th scope='row'>phone_no</th>
                      <td>{patient.phone_no}</td>
                    </tr>
                    <tr>
                      <th scope='row'>Gender</th>
                      <td>{patient.gender}</td>
                    </tr>
                    <tr>
                      <th scope='row'>Age</th>
                      <td>{patient.age}</td>
                    </tr>
                    <tr>
                      <th scope='row'>join_date</th>
                      <td>{patient.join_date}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className='row justify-content-around mt-3'>
              <div className='col-md-4'>
                <button
                  type='button'
                  className='btn button btn-lg btn-block'
                  onClick={() => {
                    onDeleteClick(patient._id);
                  }}
                >
                  Delete patient
                </button>
              </div>
              <div className='col-md-4'>
                <Link
                  to={`/edit-patient/${patient._id}`}
                  className='btn button btn-lg btn-block'
                >
                  Edit Patient
                </Link>
              </div>
              <div className='col-md-4'>
                <Link to='/all-patient' className='btn button btn-lg btn-block'>
                  Show Patient List
                </Link>
              </div>
            </div>




          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ShowPatientDetails;