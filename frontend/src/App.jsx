import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Elements/Footer'
import Home from './Components/Home'
import Authpage from './Components/Authpage'
import Navbar from './Elements/Navbar'
import Doctormain from './doctor_module/Doctormain'
import DoctorDashboard from './doctor_module/DoctorDashboard'
import DoctorRecords from './doctor_module/DoctorRecords'
import DoctorAppointments from './doctor_module/DoctorAppointments'
import Labtest from './lab_test/Labtest'
import AppointmentPage from './Components/Appointment'
import ProtectedRoute from './Components/ProtectedRoute'
import PatientMain from './patient_module/PatientMain'
import PatientDashboard from './patient_module/PatientDashboard'
import PatientRecords from './patient_module/PatientRecords'
import PatientAppointments from './patient_module/PatientAppointments'
import Prescriptions from './patient_module/Prescriptions'
import Admin from './Admin/Admin'
import Medicineadd from './Admin/Medicineadd'
import Dashboard from './Admin/Dashboard'
import LabTestAdd from './Admin/LabTestAdd'
import Medicine from './Medicine/Medicine'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Authpage />} />
          <Route path="/register" element={<Authpage />} />
          <Route path='/labtest' element={<Labtest />} />
          <Route path="/medicine" element={<Medicine />} />
          <Route path="/find-doctor" element={<AppointmentPage />} />

          {/* Admin routes */}
          <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>}>
            <Route index element={<Dashboard />} />
            <Route path="Medicineadd" element={<Medicineadd />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="LabTestAdd" element={<LabTestAdd />} />
          </Route>



          {/*Patient dashboard routes*/}
          <Route path="/patientlogin" element={<ProtectedRoute><PatientMain /></ProtectedRoute>}>
            <Route index element={<PatientDashboard />} />
            <Route path="patient-dash" element={<PatientDashboard />} />
            <Route path="patient-records" element={<PatientRecords />} />
            <Route path="prescriptions" element={<Prescriptions />} />
            <Route path="patientapps" element={<PatientAppointments />} />
          </Route>
          {/*PAtient dashboard routes*/}


          {/*Doctor dashboard routes*/}
          <Route path="/doctor-login" element={<ProtectedRoute><Doctormain /></ProtectedRoute>}>
            <Route index element={<DoctorDashboard />} />
            <Route path="doctor-main" element={<DoctorDashboard />} />
            <Route path="doctor-records" element={<DoctorRecords />} />
            <Route path="appointments" element={<DoctorAppointments />} />
          </Route>
          {/*Doctor dashboard routes*/}

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App