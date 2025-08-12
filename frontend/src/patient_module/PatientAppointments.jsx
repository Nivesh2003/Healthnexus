import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendarAlt, 
  faFileAlt, 
  faEye,
  faDownload,

} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function PatientAppointments() {
 
 //Appointment booking feature - nivesh
 const [appointments, setAppointments] = useState([]);
 const patientId = sessionStorage.getItem("userId");

 useEffect(() => {
   axios
     .get(`http://localhost:8000/api/appointments/patient/${patientId}`)
     .then((res) => setAppointments(res.data))
     .catch((err) => console.error(err));
 }, [patientId]);

  const cardStyle = {
    backdropFilter: "blur(10px) saturate(180%)",
   WebkitBackdropFilter: "blur(10px) saturate(180%)",
   backgroundColor: "rgba(250, 252, 255, 0.53)",
   borderRadius: "12px",
   border: "1px solid rgba(247, 241, 241, 0.56)",
    padding: '20px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    marginBottom: '20px'
  };

  const appointmentCardStyle = {
    padding: '15px',
    border: '1px solid #e9ecef',
    borderRadius: '8px',
    marginBottom: '15px',
    backgroundColor: '#f8f9fa',
    transition: 'all 0.3s ease'
  };

  const upcomingStyle = {
    ...appointmentCardStyle,
    borderLeft: '4px solid #28a745',
    backgroundColor: '#f8fff9'
  };

  const pastStyle = {
    ...appointmentCardStyle,
    borderLeft: '4px solid #6c757d',
    backgroundColor: '#f8f9fa',
    opacity: '0.8'
  };

  const urgentStyle = {
    ...appointmentCardStyle,
    borderLeft: '4px solid #dc3545',
    backgroundColor: '#fff5f5'
  };

  const iconStyle = {
    marginRight: '8px',
    fontSize: '1.2rem'
  };

  return (
    <div style={{ width: '100%', padding: '20px 40px 20px 20px', margin: '0' }}>
      <h2 className="mb-4 text-dark fw-bold">Appointments</h2>
      
      <div className="row">
        {/* Left Column - Appointments List */}
        <div className="col-lg-12">
          {/* Upcoming Appointments */}
          <div style={cardStyle}>
            <h5 className="mb-3">
              <FontAwesomeIcon icon={faCalendarAlt} style={iconStyle} />
              Upcoming Appointments
            </h5>
            {appointments.map((appointment, index) => (
             <div key={index} style={upcomingStyle}>
              <div className="d-flex justify-content-between align-items-start mb-2">
               <div>
                  <h6 className="mb-1 text-success">Appointment {index+=1}</h6>
                  <p className="text-black mb-1">
  Doctor: {appointment.status === 'pending' ? 'Waiting for doctor acceptance' : appointment.acceptedDoctorId?.fullName || 'N/A'} | Date: {appointment.appointmentDate || 'TBD'}
</p>

               </div>
              </div>

    <div className="row mb-2">
      <div className="col-md-3">
        <small className="text-muted">Status:</small>
        <div className="fw-bold">{appointment.status}</div>
      </div>
    </div>
  </div>
))}


          </div>

          {/* Past Appointments */}
          <div style={cardStyle}>
            <h5 className="mb-3">
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              Past Appointments
            </h5>
            
            <div style={pastStyle}>
              <div className="d-flex justify-content-between align-items-start mb-2">
                <div>
                  <h6 className="mb-1">General Checkup</h6>
                  <p className="text-muted mb-1">Annual physical examination</p>
                </div>
                <div className="d-flex gap-2">
                  <button className="btn btn-outline-primary btn-sm">
                    <FontAwesomeIcon icon={faEye} style={{marginRight: '4px'}} />
                    View Details
                  </button>
                  <button className="btn btn-outline-success btn-sm">
                    <FontAwesomeIcon icon={faDownload} style={{marginRight: '4px'}} />
                    Download Report
                  </button>
                </div>
              </div>
              
              <div className="row mb-2">
                <div className="col-md-3">
                  <small className="text-muted">Date:</small>
                  <div className="fw-bold">Dec 10, 2025</div>
                </div>
                <div className="col-md-3">
                  <small className="text-muted">Time:</small>
                  <div className="fw-bold">9:00 AM</div>
                </div>
                <div className="col-md-3">
                  <small className="text-muted">Status:</small>
                  <div className="fw-bold text-success">Completed</div>
                </div>
                <div className="col-md-3">
                  <small className="text-muted">Doctor:</small>
                  <div className="fw-bold">Dr. Williams</div>
                </div>
              </div>
            </div>

            <div style={pastStyle}>
              <div className="d-flex justify-content-between align-items-start mb-2">
                <div>
                  <h6 className="mb-1">Blood Test</h6>
                  <p className="text-muted mb-1">Laboratory blood work</p>
                </div>
                <div className="d-flex gap-2">
                  <button className="btn btn-outline-primary btn-sm">
                    <FontAwesomeIcon icon={faEye} style={{marginRight: '4px'}} />
                    View Results
                  </button>
                  <button className="btn btn-outline-success btn-sm">
                    <FontAwesomeIcon icon={faDownload} style={{marginRight: '4px'}} />
                    Download Report
                  </button>
                </div>
              </div>
              
              <div className="row mb-2">
                <div className="col-md-3">
                  <small className="text-muted">Date:</small>
                  <div className="fw-bold">Dec 05, 2025</div>
                </div>
                <div className="col-md-3">
                  <small className="text-muted">Time:</small>
                  <div className="fw-bold">8:30 AM</div>
                </div>
                <div className="col-md-3">
                  <small className="text-muted">Status:</small>
                  <div className="fw-bold text-success">Completed</div>
                </div>
                <div className="col-md-3">
                  <small className="text-muted">Lab:</small>
                  <div className="fw-bold">Central Lab</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default PatientAppointments;
