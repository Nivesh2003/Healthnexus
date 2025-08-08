import React from 'react'
import { brandImages} from '../assets/imageAssets'
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <header>
                {/* Top header section */}
                <div className='bg-info text-white text-center py-2'>
                    <p className='mb-0 fw-semibold'>++ Sign Up And Get Free Health Checkup Right Now ++</p>
                </div>
                
                {/* Second header section */}
                <div className='position-relative overflow-hidden' style={{height: '42px'}}>
                    <div className='h-100 w-25 bg-white position-absolute start-0'></div>
                    <div className='h-2-diamond'></div>
                    <div className='position-absolute end-0 text-white d-flex align-items-center justify-content-center gap-3 px-3' 
                         style={{width: '68%', height: '98%', backgroundColor: '#0057a9'}}>
                        <a href="" className='text-white text-decoration-none fw-semibold'>Academics</a>
                        <a href="" className='text-white text-decoration-none fw-semibold'>International Patients</a>
                        <a href="" className='text-white text-decoration-none fw-semibold'>Academics</a>
                        <a href="" className='text-white text-decoration-none fw-semibold'>International Patients</a>
                    </div>
                </div>
                
                {/* Main navbar section - Bootstrap Navbar */}
                <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
                    <div className="container-fluid">
                        {/* Logo section */}
                        <Link to={'/'}>
                        <div className="navbar-brand d-flex align-items-center">
                            <img src={brandImages.rightImg} alt="Logo" className="me-2" style={{height: '50px'}} />
                            <img src={brandImages.logo} alt="Logo GIF" style={{height: '40px'}} />
                        </div>
                        </Link>
                        {/* Mobile toggle button */}
                        <button className="navbar-toggler border-info" type="button" data-bs-toggle="collapse" 
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* Navbar items */}
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto align-items-center me-5">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-primary fw-semibold" href="#" 
                                       role="button" data-bs-toggle="dropdown">
                                        Treatments
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Treatment 1</a></li>
                                        <li><a className="dropdown-item" href="#">Treatment 2</a></li>
                                        <li><a className="dropdown-item" href="#">Treatment 3</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-primary fw-semibold" href="#">Academics</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-primary fw-semibold" href="#">International Patients</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-primary fw-semibold" href="#" 
                                       role="button" data-bs-toggle="dropdown">
                                        Quick Enquiry
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Enquiry 1</a></li>
                                        <li><a className="dropdown-item" href="#">Enquiry 2</a></li>
                                        <li><a className="dropdown-item" href="#">Enquiry 3</a></li>
                                    </ul>
                                </li>

                                <li className='nav-item'>
                                    <Link to={'/login'} className='fw-semibold btn btn-outline-primary mx-2'>Login/Register</Link>

                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
