import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  FaUser, 
  FaWeight, 
  FaHeartbeat, 
  FaChartLine, 
  FaListAlt,
  FaArrowUp,
  FaArrowDown,
  FaThermometerHalf,
  FaTint,
  FaCalendarAlt,
  FaBell,
  FaFileAlt,
  FaPills,
  FaStethoscope,
  FaClock,
  FaCheckCircle,
  FaExclamationTriangle,
  FaInfoCircle
} from "react-icons/fa";

function PatientDashboard() {
  const cardStyle = {
  backdropFilter: "blur(10px) saturate(180%)",
   WebkitBackdropFilter: "blur(10px) saturate(180%)",
   backgroundColor: "rgba(250, 252, 255, 0.53)",
   borderRadius: "12px",
   border: "1px solid rgba(247, 241, 241, 0.56)",
    padding: '24px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    transition: 'all 0.3s ease'
  };

  const profileCardStyle = {
    ...cardStyle,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white'
    ,border: 'none'
  };

  const vitalCardStyle = {
    ...cardStyle,
    borderLeft: '4px solid #28a745'
  };

  const warningCardStyle = {
    ...cardStyle,
    borderLeft: '4px solid #ffc107'
  };

  const dangerCardStyle = {
    ...cardStyle,
    borderLeft: '4px solid #dc3545'
  };

  const infoCardStyle = {
    ...cardStyle,
    borderLeft: '4px solid #17a2b8'
  };

  const profileImageStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid rgba(255,255,255,0.3)',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
  };

  const vitalDisplayStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '8px'
  };

  const activityItemStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 0',
    borderBottom: '1px solid #f0f0f0',
    transition: 'all 0.3s ease'
  };

  const iconStyle = {
    marginRight: '12px',
    fontSize: '1.3rem'
  };

  const glassStyle = {
 
  };
  return (
    <div className="container-fluid " >
      {/* Header Section */}
      <div className="row mb-4">
        <div className="col-12" style={{border:"none"}}>
          <div style={profileCardStyle}>
            <div className="row align-items-center">
              <div className="col-md-8">
                <div className="d-flex align-items-center">
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg" 
                    alt="Patient" 
                    style={profileImageStyle}
                    className="me-4"
                  />
                  <div>
                    <h2 className="mb-2">Welcome back, Rajeev Shukla </h2>
                    <p className="mb-1 opacity-75">Patient ID: P-12345 | Age: 35 | Blood Type: O+</p>
                    <p className="mb-0 opacity-75">Last Visit:July 15, 2025 | Next Appointment: Aug 18, 2025</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-end">
                <div className="d-flex flex-column align-items-end">
                  <span className="badge  text-white mb-2">Active Patient</span>
                  <div className="d-flex gap-2">
                    <button className="btn btn-outline-light btn-sm">
                      <FaBell style={{marginRight: '4px'}} />
                      Notifications
                    </button>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      {/* Main Content Row */}
      <div className="row g-4 " style={{alignItems: 'stretch'}}>
        {/* Left Column - Recent Activity */}
        <div className="col-lg-8">
          <div style={{...cardStyle, height: '100%'}}>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="mb-0">
                <FaListAlt style={iconStyle} />
                Recent Activity
              </h5>
            </div>
            
            <div>
              <div style={activityItemStyle}>
                <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                     style={{width: '40px', height: '40px', fontSize: '1rem'}}>
                  <FaFileAlt />
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-1 fw-semibold">Blood Test Results Available</h6>
                  <p className="text-muted mb-1 fw-semibold">Complete blood count and cholesterol panel results are ready for review</p>
                  <small className="text-muted">Aug 05, 2025 - 10:30 AM</small>
                </div>
                <span className="badge bg-success">Completed</span>
              </div>

              <div style={activityItemStyle}>
                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                     style={{width: '40px', height: '40px', fontSize: '1rem'}}>
                  <FaCalendarAlt />
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-1">Appointment Scheduled</h6>
                  <p className="text-muted mb-1">Cardiology consultation with Dr. Sarah Johnson</p>
                  <small className="text-muted">Aug 05, 2025- 2:00 PM</small>
                </div>
                <span className="badge bg-primary">Scheduled</span>
              </div>

              <div style={activityItemStyle}>
                <div className="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                     style={{width: '40px', height: '40px', fontSize: '1rem'}}>
                  <FaPills />
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-1">Prescription Refilled</h6>
                  <p className="text-muted mb-1">Metformin 500mg prescription has been refilled</p>
                  <small className="text-muted">Aug 05, 2025 - 3:15 PM</small>
                </div>
                <span className="badge bg-warning">Refilled</span>
              </div>

              <div style={activityItemStyle}>
                <div className="bg-info text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                     style={{width: '40px', height: '40px', fontSize: '1rem'}}>
                  <FaStethoscope />
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-1">Doctor Consultation Completed</h6>
                  <p className="text-muted mb-1">Follow-up consultation with Dr. Michael Williams</p>
                  <small className="text-muted">Aug 05, 2025- 11:00 AM</small>
                </div>
                <span className="badge bg-info">Completed</span>
              </div>

              <div style={activityItemStyle}>
                <div className="bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                     style={{width: '40px', height: '40px', fontSize: '1rem'}}>
                  <FaBell />
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-1">Medication Reminder</h6>
                  <p className="text-muted mb-1">Time to take your evening dose of Metformin</p>
                  <small className="text-muted">Aug 05, 2025 - 8:00 PM</small>
                </div>
                <span className="badge bg-secondary">Reminder</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Quick Actions & Stats */}
        <div className="col-lg-4 ">
          {/* Today's Schedule */}
          <div style={{...cardStyle, marginBottom: '20px'}}>
            <h5 className="mb-3">
              <FaClock style={iconStyle} />
              Today's Schedule
            </h5>
            <div>
              <div className="d-flex align-items-center mb-3 p-3" style={{backgroundColor: '#e7ffedff', borderRadius: '8px'}}>
                <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                     style={{width: '35px', height: '35px', fontSize: '0.9rem'}}>
                  <FaCheckCircle />
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-1">Listidan 10mg</h6>
                  <small className="text-muted">Taken at 8:00 AM</small>
                </div>
              </div>

              <div className="d-flex align-items-center mb-3 p-3" style={{backgroundColor: '#fff3cd', borderRadius: '8px'}}>
                <div className="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                     style={{width: '35px', height: '35px', fontSize: '0.9rem'}}>
                  <FaClock />
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-1">Metformin 500mg</h6>
                  <small className="text-muted">Due at 8:00 PM</small>
                </div>
              </div>

              <div className="d-flex align-items-center p-3" style={{backgroundColor: '#f8d7da', borderRadius: '8px'}}>
                <div className="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                     style={{width: '35px', height: '35px', fontSize: '0.9rem'}}>
                  <FaExclamationTriangle />
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-1">Aspirin 81mg</h6>
                  <small className="text-muted">Overdue - Take now</small>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div style={{...cardStyle, marginBottom: '20px'}}>
            <h5 className="mb-3">
              <FaListAlt style={iconStyle} />
              Quick Actions
            </h5>
            <div className="d-grid gap-4">
              <button className="btn btn-primary btn-lg" style={{border: "1px solid rgba(247, 241, 241, 0.56)"}}>
                <FaCalendarAlt style={{marginRight: '8px'}} />
                Book Appointment
              </button>
              <button className="btn btn-primary btn-lg" style={{border: "1px solid rgba(247, 241, 241, 0.56)"}}>
                <FaFileAlt style={{marginRight: '8px'}} />
                View Medical Records
              </button>
              <button className="btn btn-primary btn-lg" style={{border: "1px solid rgba(247, 241, 241, 0.56)"}}>
                <FaPills style={{marginRight: '8px'}} />
                Request Prescription
              </button>
              <button className="btn btn-primary btn-lg" style={{border: "1px solid rgba(247, 241, 241, 0.56)"}}>
                <FaBell style={{marginRight: '8px'}} />
                Set Reminders
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientDashboard;
