import React from 'react'
import { Outlet, Link } from "react-router-dom";
function Adminleft() {
  return (
    <div 
              className="col-2 sidebar-custom d-flex flex-column align-items-center justify-content-start"
              style={{
                height: '100vh',
                position: 'fixed',
                background: 'linear-gradient(160deg, #232b4d 60%, #1a1f3c 100%)',
                color: '#fff',
                boxShadow: '2px 0 10px rgba(35,43,77,0.2)',
                zIndex: 1000,
                paddingTop: '2rem',
                width: '16.6667%', // col-2 width
                minWidth: '180px',
              }}
            >


                <h2 style={{fontWeight: 700, letterSpacing: '2px', marginBottom: '2rem'}}>Admin Panel</h2>
                <ul style={{listStyle: 'none', padding: 0, width: '100%'}}>
                  <li style={{padding: '12px 0', textAlign: 'center', borderRadius: '8px', marginBottom: '8px', background: 'rgba(255,255,255,0.05)', cursor: 'pointer', transition: 'background 0.2s'}}>
                    <Link to="/admin" style={{ color: 'inherit', textDecoration: 'none', display: 'block' }}>
                      Dashboard
                    </Link>
                  </li>
                  <li style={{padding: '12px 0', textAlign: 'center', borderRadius: '8px', marginBottom: '8px', background: 'rgba(255,255,255,0.05)', cursor: 'pointer', transition: 'background 0.2s'}}>
                    <Link to="Medicineadd" style={{ color: 'inherit', textDecoration: 'none', display: 'block' }}>
                      Add Medical Items
                    </Link>
                  </li>
                  <li style={{padding: '12px 0', textAlign: 'center', borderRadius: '8px', marginBottom: '8px', background: 'rgba(255,255,255,0.05)', cursor: 'pointer', transition: 'background 0.2s'}}>
                    <Link to="LabTestAdd" style={{ color: 'inherit', textDecoration: 'none', display: 'block' }}>
                      Add Lab Test
                    </Link>
                  </li>
                </ul>
            </div>
  )
}

export default Adminleft
