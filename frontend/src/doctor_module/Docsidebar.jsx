import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStethoscope,
  faChartBar,
  faFileAlt,
  faPills,
  faCalendarAlt
} from '@fortawesome/free-solid-svg-icons';

function Docsidebar() {
  const location = useLocation();

  const sidebarStyle = {
    height: '100vh',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '250px',
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    padding: '30px 20px',
    boxShadow: '2px 0 10px rgba(0,0,0,0.1)',
    overflowY: 'auto',
    zIndex: 1005
  };

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '40px',
    paddingBottom: '20px',
    borderBottom: '2px solid #34495e',
    textAlign: 'center',
    color: '#3498db',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px'
  };

  const navListStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0
  };

  const navItemStyle = {
    marginBottom: '10px'
  };

  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '15px 20px',
    color: '#bdc3c7',
    textDecoration: 'none',
    borderRadius: '10px',
    transition: 'all 0.3s ease',
    fontSize: '1rem',
    fontWeight: '500'
  };

  const activeLinkStyle = {
    ...linkStyle,
    backgroundColor: '#3498db',
    color: '#ffffff',
    boxShadow: '0 4px 15px rgba(52, 152, 219, 0.3)'
  };

  const iconStyle = {
    marginRight: '12px',
    fontSize: '1.2rem',
    width: '20px',
    textAlign: 'center'
  };

  const menuItems = [
    { path: '/doctor-login/doctormain', label: 'Dashboard', icon: faChartBar },
    { path: '/doctor-login/appointments', label: 'Appointments', icon: faCalendarAlt },
    { path: '/doctor-login/doctor-records', label: 'Records', icon: faFileAlt },
    // { path: '/doctor-login/prescriptions', label: 'Prescriptions', icon: faPills }
  ];

  return (
    <div style={sidebarStyle}>
      <div style={logoStyle}>
        <FontAwesomeIcon icon={faStethoscope} />
        Health Nexus
      </div>

      <ul style={navListStyle}>
        {menuItems.map((item) => (
          <li key={item.path} style={navItemStyle}>
            <Link
              to={item.path}
              style={location.pathname === item.path ? activeLinkStyle : linkStyle}
              onMouseEnter={(e) => {
                if (location.pathname !== item.path) {
                  e.target.style.backgroundColor = '#34495e';
                  e.target.style.color = '#ffffff';
                  e.target.style.transform = 'translateX(5px)';
                }
              }}
              onMouseLeave={(e) => {
                if (location.pathname !== item.path) {
                  e.target.style.backgroundColor = '';
                  e.target.style.color = '';
                  e.target.style.transform = '';
                }
              }}
            >
              <span style={iconStyle}>
                <FontAwesomeIcon icon={item.icon} />
              </span>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '20px',
        right: '20px',
        paddingTop: '20px',
        borderTop: '1px solid #34495e',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '0.8rem', color: '#95a5a6', marginBottom: '10px' }}>
          Doctor Portal v1.0
        </div>
        <div style={{ fontSize: '0.7rem', color: '#7f8c8d' }}>
          © 2025 Health Nexus
        </div>
      </div>
    </div>
  );
}

export default Docsidebar;
