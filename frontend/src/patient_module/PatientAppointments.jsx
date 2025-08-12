import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendarAlt, 
  faFileAlt, 
  faBolt, 
  faChartBar, 
  faClock,
  faEye,
  faDownload,
  faPhone,
  faEnvelope,
  faBell,
  faMapMarkerAlt,
  faUserMd,
  faCheck,
  faTimes,
  faExclamationTriangle,
  faCalendarDay
} from '@fortawesome/free-solid-svg-icons';

function PatientAppointments() {
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
            
            <div style={urgentStyle}>
              <div className="d-flex justify-content-between align-items-start mb-2">
                <div>
                  <h6 className="mb-1 text-danger">Cardiology Consultation</h6>
                  <p className="text-muted mb-1">Follow-up appointment for blood pressure monitoring</p>
                </div>
                <span className="badge bg-danger">Tomorrow</span>
              </div>
              
              <div className="row mb-2">
                <div className="col-md-3">
                  <small className="text-muted">Date:</small>
                  <div className="fw-bold">Dec 18, 2025</div>
                </div>
                <div className="col-md-3">
                  <small className="text-muted">Time:</small>
                  <div className="fw-bold">10:00 AM</div>
                </div>
                <div className="col-md-3">
                  <small className="text-muted">Duration:</small>
                  <div className="fw-bold">30 minutes</div>
                </div>
                <div className="col-md-3">
                  <small className="text-muted">Type:</small>
                  <div className="fw-bold">In-person</div>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <div className="me-3">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" 
                       style={{width: '40px', height: '40px'}}>
                    SJ
                  </div>
                </div>
                <div>
                  <div className="fw-bold">Dr. Sarah Johnson</div>
                  <div className="text-muted small">Cardiology Department</div>
                  <div className="text-muted small">Room 205, Floor 2</div>
                </div>
              </div>
            </div>

            <div style={upcomingStyle}>
              <div className="d-flex justify-content-between align-items-start mb-2">
                <div>
                  <h6 className="mb-1 text-success">Diabetes Management</h6>
                  <p className="text-muted mb-1">Regular checkup and medication review</p>
                </div>
                <span className="badge bg-success">Next Week</span>
              </div>
              
              <div className="row mb-2">
                <div className="col-md-3">
                  <small className="text-muted">Date:</small>
                  <div className="fw-bold">Dec 25, 2025</div>
                </div>
                <div className="col-md-3">
                  <small className="text-muted">Time:</small>
                  <div className="fw-bold">2:30 PM</div>
                </div>
                <div className="col-md-3">
                  <small className="text-muted">Duration:</small>
                  <div className="fw-bold">45 minutes</div>
                </div>
                <div className="col-md-3">
                  <small className="text-muted">Type:</small>
                  <div className="fw-bold">In-person</div>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <div className="me-3">
                  <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center" 
                       style={{width: '40px', height: '40px'}}>
                    MW
                  </div>
                </div>
                <div>
                  <div className="fw-bold">Dr. Michael Williams</div>
                  <div className="text-muted small">Endocrinology Department</div>
                  <div className="text-muted small">Room 312, Floor 3</div>
                </div>
              </div>
            </div>

            <div style={upcomingStyle}>
              <div className="d-flex justify-content-between align-items-start mb-2">
                <div>
                  <h6 className="mb-1 text-success">Neurology Consultation</h6>
                  <p className="text-muted mb-1">MRI results review and headache assessment</p>
                </div>
                <span className="badge bg-info">In 2 Weeks</span>
              </div>
              
              <div className="row mb-2">
                <div className="col-md-3">
                  <small className="text-muted">Date:</small>
                  <div className="fw-bold">Jan 02, 2025</div>
                </div>
                <div className="col-md-3">
                  <small className="text-muted">Time:</small>
                  <div className="fw-bold">11:15 AM</div>
                </div>
                <div className="col-md-3">
                  <small className="text-muted">Duration:</small>
                  <div className="fw-bold">60 minutes</div>
                </div>
                <div className="col-md-3">
                  <small className="text-muted">Type:</small>
                  <div className="fw-bold">In-person</div>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <div className="me-3">
                  <div className="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center" 
                       style={{width: '40px', height: '40px'}}>
                    EB
                  </div>
                </div>
                <div>
                  <div className="fw-bold">Dr. Emily Brown</div>
                  <div className="text-muted small">Neurology Department</div>
                  <div className="text-muted small">Room 401, Floor 4</div>
                </div>
              </div>
            </div>
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
