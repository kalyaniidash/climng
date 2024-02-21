import React from 'react'
//import { Link } from 'react-router-dom'
import '../App.css'
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div className='Home'>
      <Navbar />
      <div className='container'>
        <div className='row'>
          
          <div className='col-md-8 m-auto web-desc'>
            <h1 className='display-5 text-center heading'>CLINIC MANAGEMENT SYSTEM</h1>
            <h6 className='lead text-center'>Welcome to our Website</h6>
            <p className='lead text-center'>This Can Help To Manage The Doctors Appointments </p>
            
          </div>
        </div>
      </div>
      <Link to='/all-patient ' className='btn button float-left'>
              Get Started
            </Link>

      <Footer />
    </div>
  )
}

export default Home