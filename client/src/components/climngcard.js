import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const climngcard= (props) => {
  // Define the state with useState hook
 
  const patient = props.patient
  return (
    <div className='card-container'>
      <img
        src='https://images.unsplash.com/photo-1495446815901-a7297e633e8d'
        alt='patients'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={ `/show-patient/${patient._id}` }>
            {patient.title}  
          </Link> 
        </h2>
        <h3>{patient.id}</h3>
        <p>{patient.name}</p>
      </div>
    </div>  
  )
};

export default climngcard;