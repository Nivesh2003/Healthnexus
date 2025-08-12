import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendarAlt, 
  faFileAlt, 
  faChartBar, 
  faClock,
  faEye,
  faDownload,
  faMapMarkerAlt,
  faCalendarDay
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function DoctorAppointments() {


  //Booking appointment feature -nivesh dont interfare 
  const doctorId = sessionStorage.getItem("userId");
  const [pendingAppointments, setPendingAppointments] = useState([]);
  const [acceptedAppointments, setAcceptedAppointments] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/appointments/doctor/${doctorId}`)
      .then(res => setPendingAppointments(res.data));
    
      axios.get(`http://localhost:8000/api/appointments/doctor/${doctorId}/accepted`)
      .then(res => setAcceptedAppointments(res.data));
    
  }, []);

  const respondToAppointment = async (id, status) => {
    const date = status === 'accepted' ? prompt("Enter appointment date (dd-mm-yyyy)") : null;
    try {
      const res = await axios.put(`http://localhost:8000/api/appointments/${id}/respond`, {
        status, appointmentDate: date ,doctorId
      });
      if (res.status === 200) {
        alert(`Appointment ${status} successfully!`);
      }
      window.location.reload();
    } catch (err) {
      alert(`Failed to update appointment: ${err.response?.data?.error || err.message}`);
    }
  };
  


  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    marginBottom: '20px'
  };
  
  const appointmentCardStyle = {
    padding: '15px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '12px',
    marginBottom: '15px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
  };
  
  const upcomingStyle = {
    ...appointmentCardStyle,
    borderLeft: '4px solid #28a745',
    backgroundColor: 'rgba(40, 167, 69, 0.1)'
  };
  
  const pastStyle = {
    ...appointmentCardStyle,
    borderLeft: '4px solid #6c757d',
    backgroundColor: 'rgba(108, 117, 125, 0.05)',
    opacity: '0.8'
  };
  
  const urgentStyle = {
    ...appointmentCardStyle,
    borderLeft: '4px solid #dc3545',
    backgroundColor: 'rgba(220, 53, 69, 0.1)'
  };

  const iconStyle = {
    marginRight: '8px',
    fontSize: '1.2rem'
  };

  return (
    <div style={{ width: '100%', padding: '20px 40px 20px 20px', margin: '0' }}>
      <div className="row" style={cardStyle}>
        <div className="col-4">
        <h2 className="mb-2 text-center" style={{color:'wheat'}}>Appointments</h2>
        </div>
        <div className="col-8 text-end">
          <div className="btn btn-large btn-outline-warning">ADD NEW APPOINTMENT</div>
        </div>
      </div>
      <div className="row">
        {/* Left Column - Appointments List */}
        <div className="col-lg-9">
          {/* Upcoming Appointments */}
          <div style={cardStyle}>
            <h5 className="mb-3">
              <FontAwesomeIcon icon={faCalendarAlt} style={iconStyle} />
              Upcoming Appointments
            </h5>
            
            {pendingAppointments.map(a => (
    <div key={a._id} style={urgentStyle} className="mb-3">
      <div className="d-flex justify-content-between align-items-start mb-2">
        <div>
          <h6 className="mb-1 text-danger">{a.reason}</h6>
          <p className="text-muted mb-1">
            Patient: {a.patientId?.fullName} | Blood Type: {a.bloodType}
          </p>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-md-4">
          <small className="text-muted">Date:</small>
          <div className="fw-bold">
            {new Date(a.date).toLocaleDateString()}
          </div>
        </div>
        <div className="col-md-4">
          <small className="text-muted">Time:</small>
          <div className="fw-bold">
            {a.time || 'N/A'}
          </div>
        </div>
        <div className="col-md-4 d-flex gap-2 align-items-center">
          <button
            className="btn btn-sm btn-success"
            onClick={() => respondToAppointment(a._id, 'accepted')}
          >
            Accept
          </button>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => respondToAppointment(a._id, 'rejected')}
          >
            Reject
          </button>
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
            
            {acceptedAppointments.map(a => (
    <div key={a._id} style={pastStyle} className="mb-3">
      <div className="d-flex justify-content-between align-items-start mb-2">
        <div>
          <h6 className="mb-1">{a.reason || 'No reason provided'}</h6>
          <p className="text-muted mb-1">
            Patient: {a.patientId?.fullName || 'Unknown'}
          </p>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-md-6">
          <small className="text-muted">Date:</small>
          <div className="fw-bold">
            {a.appointmentDate
              ? new Date(a.appointmentDate).toLocaleDateString()
              : 'N/A'}
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <button
            className="btn btn-danger btn-sm"
            // onClick={() => cancelAppointment(a._id)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  ))}
          </div>
        </div>

        {/* Right Column - Actions and Stats */}
        <div className="col-lg-3">

          {/* Appointment Statistics */}
          <div style={cardStyle}>
            <h5 className="mb-3">
              <FontAwesomeIcon icon={faChartBar} style={iconStyle} />
              Appointment Stats
            </h5>
            <div className="row text-center">
              <div className="col-6">
                <div className="border-end">
                  <h4 className="text-success mb-1">3</h4>
                  <small className="text-muted">Upcoming</small>
                </div>
              </div>
              <div className="col-6">
                <h4 className="text-warning mb-1">2</h4>
                <small className="text-muted">Past</small>
              </div>
            </div>
            <hr />
            <div className="row text-center">
              <div className="col-6">
                <div className="border-end">
                  <h4 className="text-danger mb-1">1</h4>
                  <small className="text-muted">Tomorrow</small>
                </div>
              </div>
              <div className="col-6">
                <h4 className="text-info mb-1">3</h4>
                <small className="text-muted">Doctors</small>
              </div>
            </div>
          </div>

          {/* Next Appointment */}
          <div style={cardStyle}>
            <h5 className="mb-3">
              <FontAwesomeIcon icon={faClock} style={iconStyle} />
              Next Appointment
            </h5>
            <div style={{backgroundColor: '#fff3cd', padding: '15px', borderRadius: '8px'}}>
              <h6 className="text-danger mb-2">Cardiology Consultation</h6>
              <p className="mb-1"><strong>Tomorrow</strong></p>
              <p className="mb-1">Dec 18, 2025 at 10:00 AM</p>
              <p className="mb-2">Dr. Sarah Johnson</p>
              <button className="btn btn-outline-primary btn-sm w-100">
                <FontAwesomeIcon icon={faMapMarkerAlt} style={{marginRight: '4px'}} />
                Get Directions
              </button>
            </div>
          </div>

          {/* Calendar View */}
          <div style={cardStyle}>
            <h5 className="mb-3">
              <FontAwesomeIcon icon={faCalendarDay} style={iconStyle} />
              This Month
            </h5>
            <div style={{backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '8px', textAlign: 'center'}}>
              <div className="mb-2">
                <span className="badge bg-danger me-1">18</span>
                <small>Cardiology</small>
              </div>
              <div className="mb-2">
                <span className="badge bg-success me-1">25</span>
                <small>Diabetes</small>
              </div>
              <div>
                <span className="badge bg-info me-1">02</span>
                <small>Neurology</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorAppointments;
