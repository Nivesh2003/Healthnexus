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
  faCalendarDay
} from '@fortawesome/free-solid-svg-icons';

function DoctorAppointments() {
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
