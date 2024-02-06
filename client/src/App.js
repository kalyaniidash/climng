// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import ShowPatientList from './components/ShowPatientList';
import CreatePatient from './components/CreatePatient';
import ShowPatientDetails from './components/ShowPatientDetails';
import UpdatePatientInfo from './components/UpdatePatientInfo';
import Home from './components/Home';

const App =() =>{
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/all-patient/" exact element={<ShowPatientList />}/>
        <Route path="/create-patient" element={<CreatePatient  />} />
        <Route path="/show-patientDetails/:id" element={<ShowPatientDetails/>} />
        <Route path="/show-patientList/:id" element={<ShowPatientList/>} />
        <Route path="/edit-patient/:id" element={<UpdatePatientInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
