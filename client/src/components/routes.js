import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const AllRoutes = () =>(
    <div className='AllRoutes'>
        <Navbar />
        <br />
        <br /><br/>
        <div className='container'>
            <h3 className='display-4'>Backend Routes</h3>
            <ul>
                <li>Create: api/patient/ </li>
                <li>Read: api/patients/ </li>
                <li>FindById: api/patient/:id</li>
                <li>Update: api/patient/:id</li>
                <li>Delete: api/patient/:id</li>
            </ul>
        </div>
        <div className='container'>
            <h3 className='display-4'>Frontend Routes</h3>
            <ul>
                <li>Create: /create-patient </li>
                <li>Read: /all-patient </li>
                <li>FindById: /show-patientDetails/:id</li>
                <li>Update: /edit-patient/:id</li>
            </ul>
        </div>
        <Footer />
    </div>
)

export default AllRoutes