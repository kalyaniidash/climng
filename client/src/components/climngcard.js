import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ClimngCard = (props) => {
  const patient = props.patient;
  return (
    <div className='card-container'>
      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9szj3smxnWp7IaSRcxMLyaHZsyAnk5b48Ag&usqp=CAU' 
        alt='Patients'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={`/show-patientDetails/${patient._id}`}>
            {patient.name}<br />
          </Link>
        </h2><br />
        <h3>{patient.id}</h3>
      </div>
    </div>
  );
};

export default ClimngCard;
