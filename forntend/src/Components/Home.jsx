import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className='main'>
        {/* Emergency Sticker - Better visibility */}
        <div className='position-fixed start-0 d-flex align-items-center justify-content-center text-white fw-bold' 
             style={{
                 top: '25%', 
                 height: '250px', 
                 width: '40px', 
                 backgroundColor: '#ff4444', 
                 fontSize: '16px', 
                 zIndex: 1000,
                 borderTopRightRadius: '20px',
                 borderBottomRightRadius: '20px',
                 boxShadow: '3px 0 10px rgba(0,0,0,0.4)',
                 border: '2px solid #ffffff',
                 letterSpacing: '2px'
             }}>
            <div style={{
                transform: 'rotate(-90deg)',
                whiteSpace: 'nowrap',
                fontWeight: '900',
                fontSize: '18px',
                cursor: 'pointer',
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
            }}>
                EMERGENCY
            </div>
        </div>

        {/* WhatsApp Sticker - Fixed positioning */}
        <div className='position-fixed d-flex align-items-center' 
             style={{right: '2%', bottom: '20%', zIndex: 1000}}>
            <div className='bg-success text-white px-3 py-2 rounded-pill me-2 d-none d-md-block'>
                <small className='fw-semibold'>Book an appointment</small>
            </div>
            <div className='bg-success rounded-circle d-flex align-items-center justify-content-center' 
                 style={{width: '50px', height: '50px'}}>
                <img src="./src/assets/images/whats-app-logo.svg" alt="WhatsApp" style={{width: '30px', height: '30px'}} />
            </div>
        </div>

        {/* Hero Section with Bootstrap */}
        <div className='appointment-section'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-10 col-md-12'>
                        <h2 className='text-primary text-center mb-4 mt-5'>Schedule Your Appointment Online</h2>
                        <div className='bg-white rounded shadow p-4 mb-4'>
                            <div className='row  rounded'>
                                <div className='col-lg-9 col-md-8 mb-3 mb-md-0 align-items-center justify-content-center rounded d-flex'>
                                    <input type="text" className='form-control search-input' placeholder='Search For Doctor or Speciality' />
                                </div>
                                <div className='col-lg-3 col-md-4'>
                                    <div className='h-100 rounded d-flex align-items-center justify-content-center text-white fw-bold' 
                                         style={{backgroundColor: '#3d717c', minHeight: '100px'}}>
                                        Search
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Facilities Cards with Bootstrap Grid */}
                        <div className='row g-3'>
                            <div className='col-lg-4 col-md-6'>
                                <div className='bg-white rounded shadow p-4 h-100 text-center'>
                                    <a href="" className='text-decoration-none text-dark'>
                                        <h6>24hr<br/><br />Emergency Service</h6>
                                    </a>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6'>
                                <div className='bg-white rounded shadow p-4 h-100 text-center'>
                                    <a href="" className='text-decoration-none text-dark'>
                                        <h6>Online <br/><br />Physican Consultation</h6>
                                    </a>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-12'>
                                <div className='bg-white rounded shadow p-4 h-100 text-center'>
                                    <a href="" className='text-decoration-none text-dark'>
                                        <h6>Clean<br/>&<br />Hygienic Environment</h6>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Bootstrap Carousel */}
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src="./src/assets/images/slider-img1.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src="./src/assets/images/slider-img2.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src="./src/assets/images/slider-img3.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="./src/assets/images/slider-img4.jpg" className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

        {/* Specialities Section with Bootstrap Grid */}
        <div className='container my-5'>
            <div className='row'>
                <div className='col-lg-6'>
                    <div className="sp-container">
                        <h2 className="sp-title border-bottom border-primary pb-2 mb-4">Specialities & Procedures</h2>
                        <div className="sp-tabs mb-4">
                            <span className="active-tab text-info border-bottom border-info fw-bold">Specialities</span>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="d-flex align-items-start mb-4">
                                    <img src="./src/assets/images/first.png" alt="Cancer Centre" className="me-3" style={{width: '30px', height: '30px'}} />
                                    <p className="text-primary mb-0">Cancer Centre</p>
                                </div>
                                <div className="d-flex align-items-start mb-4">
                                    <img src="./src/assets/images/second.png" alt="Heart & Vascular" className="me-3" style={{width: '30px', height: '30px'}} />
                                    <p className="text-primary mb-0">Heart & Vascular Institute</p>
                                </div>
                                <div className="d-flex align-items-start mb-4">
                                    <img src="./src/assets/images/third.png" alt="Digestive & Liver" className="me-3" style={{width: '30px', height: '30px'}} />
                                    <p className="text-primary mb-0">Institute For Digestive & Liver Diseases</p>
                                </div>
                                <div className="d-flex align-items-start mb-4">
                                    <img src="./src/assets/images/fourth.png" alt="Bone & Ortho" className="me-3" style={{width: '30px', height: '30px'}} />
                                    <p className="text-primary mb-0">Institute For Bone, Joint Replacement,<br/> Orthopedics Spine & Sports Medicine</p>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="d-flex align-items-start mb-4">
                                    <img src="./src/assets/images/fifth.png" alt="Bone Marrow" className="me-3" style={{width: '30px', height: '30px'}} />
                                    <p className="text-primary mb-0">Centre For Bone Marrow Transplant</p>
                                </div>
                                <div className="d-flex align-items-start mb-4">
                                    <img src="./src/assets/images/sixth.png" alt="Neuro" className="me-3" style={{width: '30px', height: '30px'}} />
                                    <p className="text-primary mb-0">Centre For Neurosciences</p>
                                </div>
                                <div className="d-flex align-items-start mb-4">
                                    <img src="./src/assets/images/seven.png" alt="Kidney" className="me-3" style={{width: '30px', height: '30px'}} />
                                    <p className="text-primary mb-0">Centre For Renal Sciences & Kidney Transplant</p>
                                </div>
                                <div className="d-flex align-items-start mb-4">
                                    <img src="./src/assets/images/eight.png" alt="Chest & Respiratory" className="me-3" style={{width: '30px', height: '30px'}} />
                                    <p className="text-primary mb-0">Centre For Chest & Respiratory Diseases</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4">
                            <a href="#" className="text-primary text-decoration-none fw-bold">View all &gt;</a>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <a href="" className="d-block">
                        <img src="./src/assets/images/rightimg.png" alt="" className='img-fluid rounded' />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
