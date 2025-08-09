import { Link } from 'react-router-dom'
import '../../src/App.css'
import {checkup,doctor,opinion,sliderImages} from '../assets/imageAssets'
import Chatbot from '../Elements/Chatbot'

function Home() {
    return (
        <div>
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
                style={{ right: '2%', bottom: '20%', zIndex: 1000 }}>
                <div className='bg-success text-white px-3 py-2 rounded-pill me-2 d-none d-md-block'>
                    <small className='fw-semibold'>Book an appointment</small>
                </div>
                <div className='bg-success rounded-circle d-flex align-items-center justify-content-center'
                    style={{ width: '50px', height: '50px' }}>
                    <img src="./src/assets/images/whats-app-logo.svg" alt="WhatsApp" style={{ width: '30px', height: '30px' }} />
                </div>
            </div>

            <Chatbot />

            {/* Hero Section with Bootstrap */}
            <div className='container-fluid  schedule-appointment mb-5'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-10 col-md-12'>
                            <h2 className='text-primary text-center mb-4 mt-5'>Schedule Your Appointment Online</h2>
                            <div className='bg-white rounded shadow p-4 mb-4'>
                                <div className='row  rounded'>
                                    <div className='col-lg-9 col-md-8 mb-3 mb-md-0'>
                                        <div className='input-group search-container h-100 rounded-2 bg-white'>
                                            <span className='input-group-text bg-transparent border-0 px-3'>
                                                <i className="fa-solid fa-magnifying-glass search-icon"></i>
                                            </span>
                                            <input
                                                type="text"
                                                className='form-control border-0 search-input fs-6'
                                                placeholder='Search For Doctor or Speciality'
                                                style={{ height: '70px', boxShadow: 'none' }}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-md-4'>
                                        <div className='h-100 rounded d-flex align-items-center justify-content-center text-white fw-bold'
                                            style={{ backgroundColor: '#0b8aa3ff', minHeight: '70px', borderRadius: '0 0.25rem 0.25rem 0', fontSize: '20px' }}>
                                            Book an Appointment
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     {/* Facilities Cards with Bootstrap Grid */}
                <div className='row justify-content-center mt-5 mx-3'>
                    <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
                        <div className='bg-white rounded shadow text-center p-3 h-100 mx-auto find-doc' style={{ maxWidth: '250px', minHeight: '150px' }}>
                        <Link to="/find-doctor" className="text-decoration-none"> {/*Link to appointment page */}
                            <img src={doctor} alt="Find a Doctor" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
                            <h6 className='mt-2 text-primary fw-bold' style={{ fontSize: '24px', margin: '0' }}>Find a Doctor</h6>
                            </Link>
                        </div>
                    </div>
                    <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
                        <div className='bg-white rounded shadow text-center p-3 h-100 mx-auto' style={{ maxWidth: '250px', minHeight: '150px' }}>
                            
                            <img src={checkup} alt="Health Check-up" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
                            <h6 className='mt-2 text-primary fw-bold' style={{ fontSize: '24px', margin: '0' }}>Health Check-up</h6>
                        </div>
                    </div>
                    <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
                        <div className='bg-white rounded shadow text-center p-3 h-100 mx-auto' style={{ maxWidth: '250px', minHeight: '150px' }}>
                          <img src={opinion} alt="Second Opinion" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
                                <h6 className='mt-2 text-primary fw-bold' style={{ fontSize: '24px', margin: '0' }}>Awareness</h6>
                        </div>
                    </div>
                </div>
            </div>
              {/* Bootstrap Carousel */}
            <div className="container-fluid mt-3 mb-5 ">
            <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={sliderImages.slide1} className="d-block w-100" alt="Slide 1" style={{ height: '400px', objectFit: 'cover' }} />
                    </div>
                    <div className="carousel-item">
                        <img src={sliderImages.slide2} className="d-block w-100" alt="Slide 2" style={{ height: '400px', objectFit: 'cover' }} />
                    </div>
                    <div className="carousel-item">
                        <img src={sliderImages.slide3} className="d-block w-100" alt="Slide 3" style={{ height: '400px', objectFit: 'cover' }} />
                    </div>
                    <div className="carousel-item">
                        <img src={sliderImages.slide4} className="d-block w-100" alt="Slide 4" style={{ height: '400px', objectFit: 'cover' }} />
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
                                        <img src="./src/assets/images/first.png" alt="Cancer Centre" className="me-3" style={{ width: '30px', height: '30px' }} />
                                        <p className="text-primary mb-0">Cancer Centre</p>
                                    </div>
                                    <div className="d-flex align-items-start mb-4">
                                        <img src="./src/assets/images/second.png" alt="Heart & Vascular" className="me-3" style={{ width: '30px', height: '30px' }} />
                                        <p className="text-primary mb-0">Heart & Vascular Institute</p>
                                    </div>
                                    <div className="d-flex align-items-start mb-4">
                                        <img src="./src/assets/images/third.png" alt="Digestive & Liver" className="me-3" style={{ width: '30px', height: '30px' }} />
                                        <p className="text-primary mb-0">Institute For Digestive & Liver Diseases</p>
                                    </div>
                                    <div className="d-flex align-items-start mb-4">
                                        <img src="./src/assets/images/fourth.png" alt="Bone & Ortho" className="me-3" style={{ width: '30px', height: '30px' }} />
                                        <p className="text-primary mb-0">Institute For Bone, Joint Replacement,<br /> Orthopedics Spine & Sports Medicine</p>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="d-flex align-items-start mb-4">
                                        <img src="./src/assets/images/fifth.png" alt="Bone Marrow" className="me-3" style={{ width: '30px', height: '30px' }} />
                                        <p className="text-primary mb-0">Centre For Bone Marrow Transplant</p>
                                    </div>
                                    <div className="d-flex align-items-start mb-4">
                                        <img src="./src/assets/images/sixth.png" alt="Neuro" className="me-3" style={{ width: '30px', height: '30px' }} />
                                        <p className="text-primary mb-0">Centre For Neurosciences</p>
                                    </div>
                                    <div className="d-flex align-items-start mb-4">
                                        <img src="./src/assets/images/seven.png" alt="Kidney" className="me-3" style={{ width: '30px', height: '30px' }} />
                                        <p className="text-primary mb-0">Centre For Renal Sciences & Kidney Transplant</p>
                                    </div>
                                    <div className="d-flex align-items-start mb-4">
                                        <img src="./src/assets/images/eight.png" alt="Chest & Respiratory" className="me-3" style={{ width: '30px', height: '30px' }} />
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
