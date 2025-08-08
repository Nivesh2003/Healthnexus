import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Elements/Footer'
import Home from './Components/Home'
import Authpage from './Components/Authpage'
import Navbar from './Elements/Navbar'
import Patient from './dashboard/Patient'
import Doctormain from './doctor_module/Doctormain'
import DoctorDashboard from './doctor_module/DoctorDashboard'
import DoctorRecords from './doctor_module/DoctorRecords'
import DoctorAppointments from './doctor_module/DoctorAppointments'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Authpage/>} />
          <Route path="/register" element={<Authpage/>} />


          <Route path="/patient" element={<Patient />} />
          {/*Doctor dashboard routes*/}
        <Route path="/doctor-login" element={<Doctormain />}>
          <Route index element={<DoctorDashboard />} />
          <Route path="doctor-main" element={<DoctorDashboard/>} />
          <Route path="doctor-records" element={<DoctorRecords/>} />
          <Route path="appointments" element={<DoctorAppointments/>} />
        </Route> 
        {/*Doctor dashboard routes*/}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App