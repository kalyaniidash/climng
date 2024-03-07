import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Tech = () =>(
    <div className='AllRoutes'>
        <Navbar />
        <br />
        <br />
        <br />
        <div className='container'><br/>
            <h3 className='display-4'>Technology</h3>
            <ul>
                <li>Cyclic App </li>
                <li>MongoDB </li>
                <li>Expressjs</li>
                <li>Nodejs</li>
                <li>Reactjs</li>
            </ul>
        </div>
       
        <Footer />
    </div>
)

export default Tech