import { Link } from 'react-router-dom'
import '../../src/App.css'
import { checkup, doctor, opinion, sliderImages } from '../assets/imageAssets'
import Chatbot from '../Elements/Chatbot'
import Footer from '../Elements/Footer'
import Navbar from '../Elements/Navbar'
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";



const faqData = {
    "Q. General Questions": [
        { q: "How do I book an appointment?", a: "You can call us or book online via our portal." },
        { q: "What are the visiting hours?", a: "We’re open from 8 AM to 8 PM daily." },
        { q: "What about the Visitor’s Waiting Areas in your hospital?", a: "For the comfort of your loved ones, waiting areas are available. The nursing staff can direct you to the correct waiting area." },
    ],
    "Q. Billing & Insurance": [
        { q: "Which insurance do you accept?", a: "We accept Niva-Bupa, Nexus Health Insurance, and others." },
        { q: "How can I pay my bill?", a: "You can pay online, in person, or by phone." },
        { q: "Q. Who will guide me during the process of my treatment?", a: "Not just the medical physicians but each and every person involved with Nexus Healthcare." },

    ],
};
const PatientsReviews = [
    {
        name: "Mathilde Langevin",
        review:
            "I, Aastha, 24, was diagnosed with a large 10L left ovarian cyst (31.6 x 27.8 x 17.8). Col. (Dr.) Sunil Kumar Chawla handled my case with great care and professionalism. He ensured all tests were done quickly and performed laparoscopic surgery with 3 incisions. I was able to walk the very next day & got discharged within 24 hours post--surgery. Forever grateful for his expertise and the entire Kailash Hospital Team.",
        posted: "Posted on: 17/06/2025",
        img: "./src/assets/images/patent-img.png",
    },
    {
        name: "Mads Eneqvist",
        review:
            "Need a consultation regarding your healthcare or diagnosis? I'm always ready to provide you with professional healthcare consulting at an affordable priceCol (Dr) Sunil Kumar Chawla is an exceptional surgeon whose expertise, compassion and dedication are truly commendable. From the moment in walked into his cabin i was greeted with warmth and proffesionalism by him.upon being diagnosed with two 9 cm fibroid , i was understandably anxious and uncertain about what lay ahead. However from the moment i walked into Dr Chawla i was met with a sense of reassurance and proffesionalism that immediately put me at ease.During my consultation, Dr Chawla took the time to listen attentively to my concerns and thoroughly explain my diagnosis and treatment options in a way that was easy to understand. Their depth of knowledge instilled confidence in me knowing that i was in capable hands. A big thanks to Dr Chawla's guidance and expertise i have experienced significant improvement in my health and quality of life. I am truly grateful for their outstanding care and would highly recommend Dr Chawla to anyone in need of a skilled and compassionate laproscopic surgery.ThanksMegha Joshi Pandey.",
        posted: "Posted on: 27/04/2029",
        img: "./src/assets/images/patent-img.png",
    },
    {
        name: "David Clde",
        review:
            "Need a consultation regarding your healthcare or diagnosis? I'm always ready to provide you with professional healthcare consulting at an affordable price.",
        posted: "Posted on: 27/09/2022",
        img: "./src/assets/images/patent-img.png",
    },
    {

        name: "Noelle Rebekah",
        review:
            "My experience under the care of Dr. Sushil Sharma has been nothing short of extraordinary. As a Senior Consultant in Orthopedics and Joint Replacement Surgery, Dr. Sharma's expertise is unmatched. His thorough evaluation and personalized treatment plan have brought immense relief to my orthopedic issues. Dr. Sharma's compassionate approach and dedication to my well-being have instilled confidence in me. I am deeply grateful for his professionalism and highly recommend him to anyone seeking exceptional orthopedic care.",
        posted: "Posted on: 31/06/2023",
        img: "./src/assets/images/patent-img.png",
    },
];
   const blogs = [
  {
    title: 'Understanding Blood Cancer & Its Symptoms',
    desc: 'Cancer means uncontrolled growth of...',
    image: './src/assets/images/blog1.png',
  },
  {
    title: 'Migraine headache: Symptoms, Home Remedies, and Treatment',
    desc: '',
    image: './src/assets/images/blog2.png',
  },
  {
    title: 'Lung Cancer Symptoms: Everything You Need to Know',
    desc: 'Lung cancer is a severe form of cancer...',
    image: './src/assets/images/blog3.png',
  },
  {
    title: 'Breast Cancer Symptoms: Early Detection Is Key to Effective...',
    desc: 'Breast cancer demands early detection...',
    image: './src/assets/images/blog4.png',
  },
];

function Home() {
    return (
        <div>
            <Navbar/>
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
                        <Link to="/find-doctor" className="text-decoration-none"> {/*Link to appointment page */}
                            <div className='bg-white rounded shadow text-center p-3 h-100 mx-auto hover-card' style={{ maxWidth: '250px', minHeight: '150px' }}>
                                <img src={doctor} alt="Find a Doctor" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
                                <h6 className='mt-2 text-primary fw-bold' style={{ fontSize: '24px', margin: '0' }}>Find a Doctor</h6>
                            </div>
                        </Link>
                    </div>
                    <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4 cursor-pointer'>
                        <Link to="/labtest" style={{ textDecoration: 'none' }}>
                            <div className='bg-white rounded shadow text-center p-3 h-100 mx-auto hover-card' style={{ maxWidth: '250px', minHeight: '150px' }}>
                                <img src={checkup} alt="Health Check-up" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
                                <h6 className='mt-2 text-primary fw-bold' style={{ fontSize: '24px', margin: '0' }}>Health Check-up</h6>
                            </div>
                        </Link>
                    </div>
                    <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
                        <Link to="/medicine" style={{ textDecoration: 'none' }}>
                            <div className='bg-white rounded shadow text-center p-3 h-100 mx-auto hover-card' style={{ maxWidth: '250px', minHeight: '150px' }}>
                                <img src={opinion} alt="Second Opinion" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
                                <h6 className='mt-2 text-primary fw-bold' style={{ fontSize: '24px', margin: '0' }}>Medicine</h6>
                            </div>
                        </Link>

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
            {/* -----------------------------Facalities_section--------------------------------------- */}

            <div className="departments-bg py-5">
                <div className="container text-center">
                    <h2 className="mb-4 text-black">OUR FACILITIES</h2>
                    <div className="d-flex justify-content-center flex-wrap gap-3">
                        <div className="card department-card px-3 py-4">
                            <a href="" className='facalities-a-tag'>
                                <div className="icon mb-2"></div>
                                <div className="name"><div><img className='facalities-card-img' src="./src/assets/images/img.png" alt="" /></div>Emergency Department</div>
                            </a>
                        </div>

                        <div className="card department-card px-3 py-4">
                            <a href="" className='facalities-a-tag'>
                                <div className="icon mb-2"></div>
                                <div className="name"><div><img className='facalities-card-img' src="./src/assets/images/img.png" alt="" /></div>Pediatric Department</div>
                            </a>
                        </div>

                        <div className="card department-card px-3 py-4 active-card">
                            <a href="" className='facalities-a-tag'>
                                <div className="icon mb-2"></div>
                                <div className="name"><div><img className='facalities-card-img' src="./src/assets/images/img.png" alt="" /></div> Gynecology Department</div>
                            </a>
                        </div>

                        <div className="card department-card px-3 py-4">
                            <a href="" className='facalities-a-tag'>
                                <div className="icon mb-2"></div>
                                <div className="name"><div><img className='facalities-card-img' src="./src/assets/images/img.png" alt="" /></div>Cardiology Department</div>
                            </a>
                        </div>

                        <div className="card department-card px-3 py-4">
                            <a href="" className='facalities-a-tag'>
                                <div className="icon mb-2"></div>
                                <div className="name"><div><img className='facalities-card-img' src="./src/assets/images/img.png" alt="" /></div>Neurology Department</div>
                            </a>
                        </div>

                        <div className="card department-card px-3 py-4">
                            <a href="" className='facalities-a-tag'>
                                <div className="icon mb-2"></div>
                                <div className="name"><div><img className='facalities-card-img' src="./src/assets/images/img.png" alt="" /></div>Psychiatry Department</div>
                            </a>
                        </div>
                        <div className="card department-card px-3 py-4 active-card">
                            <a href="" className='facalities-a-tag'>
                                <div className="icon mb-2"></div>
                                <div className="name"><div><img className='facalities-card-img' src="./src/assets/images/img.png" alt="" /></div> Gynecology Department</div>
                            </a>
                        </div>

                        <div className="card department-card px-3 py-4">
                            <a href="" className='facalities-a-tag'>
                                <div className="icon mb-2"></div>
                                <div className="name"><div><img className='facalities-card-img' src="./src/assets/images/img.png" alt="" /></div>Cardiology Department</div>
                            </a>
                        </div>

                        <div className="card department-card px-3 py-4">
                            <a href="" className='facalities-a-tag'>
                                <div className="icon mb-2"></div>
                                <div className="name"><div><img className='facalities-card-img' src="./src/assets/images/img.png" alt="" /></div>Neurology Department</div>
                            </a>
                        </div>

                        <div className="card department-card px-3 py-4">
                            <a href="" className='facalities-a-tag'>
                                <div className="icon mb-2"></div>
                                <div className="name"><div><img className='facalities-card-img' src="./src/assets/images/img.png" alt="" /></div>Psychiatry Department</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/*----------------------------Patient_reviews--------------------------------- */}



            <div className="patient-review-section container my-5">
                <div className="patient-review text-center mb-4">
                    <h2>What Our Patients Says</h2>
                </div>

                <div className="row">
                    {PatientsReviews.map((t, i) => (
                        <div className="patient-review-section-cards col-md-6 mb-4" key={i}>
                            <div className=" card border-0 shadow-sm p-3">
                                <div className="review-card-head d-flex align-items-center ">
                                    <img
                                        src={t.img}
                                        alt={t.name}
                                        className="rounded-circle me-3"
                                        width="60"
                                        height="60"
                                        style={{ position: 'sticky' }}
                                    />
                                    <div>
                                        <h6 className="mb-0">{t.name}</h6>
                                        <small className="text-muted">{t.position}</small>
                                    </div>
                                </div>
                                <p>{t.review}</p>
                                <p className="text-muted">{t.posted}</p>
                                <div className="text-warning">
                                    {"★★★★★"}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center bg-light p-4 rounded">
                    <a href="">
                        <button className="consultation-button ">Get Consultation</button>
                    </a>
                </div>
            </div>


            {/* ---------------------------Faq-section----------------------------------------- */}



            <Container className="faq-section my-5">
                <h2 className="faq-heading text-center">Do You Have Questions?</h2>
                <p className="text-center text-muted">We have answers (well, most of the time!)</p>
                <img className='faq-image' src="./src/assets/images/faq-image.png" alt="" />
                <Row className="mt-4">
                    {Object.entries(faqData).map(([category, items], colIndex) => (
                        <Col md={6} key={colIndex}>
                            <h4 className='faq-que-heading'>{category} FAQs</h4>
                            <Accordion defaultActiveKey="0">
                                {items.map((item, idx) => (
                                    <Accordion.Item eventKey={idx.toString()} key={idx}>
                                        <Accordion.Header>{item.q}</Accordion.Header>
                                        <Accordion.Body>{item.a}</Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </Col>
                    ))}
                </Row>
            </Container>

            {/* --------------------BBlog_section-------------------------------------- */}

<Container className="my-5">
      <Row className="justify-content-between align-items-center mb-3">
        <Col><h4>Health Blogs</h4></Col>
       
      </Row>
      <Row xs={1} md={2} lg={4} className="g-4">
        {blogs.map((blog, index) => (
          <Col key={index}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={blog.image} />
              <Card.Body>
                <Card.Title className="fs-6">{blog.title}</Card.Title>
                <Card.Text className="text-muted">{blog.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
  
    </Container>
            <Footer />
        </div>
    )
}

export default Home
