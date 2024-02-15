import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ClimngCard = (props) => {
  const patient = props.patient;
  return (
    <div className='card-container'>
      <img
        src='https://www.vidyohealth.com/wp-content/uploads/2023/03/hero-childrens-hospital2.jpg'
        alt='Patients'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={`/show-patient/${patient._id}`}>
            {patient.name}
          </Link>
        </h2>
        <h3>{patient.id}</h3>
        <p>{patient.age}</p>
      </div>
    </div>
  );
};

export default ClimngCard;
