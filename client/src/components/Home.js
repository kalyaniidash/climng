// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Home = (props) => {
  // Define the state with useState hook
 

  return (
    <div className='home'>
      <Navbar />
      <div className='container'>
        
        <div className='row '>
        <div className='col-md-8 m-auto head'>
          <h2>Clinic Managment System</h2>
          <h6 >"We care about you and your health"</h6>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;