import React from 'react'
import '../App.css'
import liver from '../assets/liver.webp'
import cold from '../assets/cold.webp'
import old from '../assets/old.webp'
import pain from '../assets/pain.webp'
import respiration from '../assets/respiration.webp'
import diabetes from '../assets/diabetes.webp'
import stomach from '../assets/stomach.webp'
import sexual from '../assets/sexual.webp'
import cardiac from '../assets/cardiac.webp'
import oral from '../assets/oral.webp'
import lab from '../assets/lab.svg'
import shop from '../assets/shop.webp'
import health from '../assets/health.svg'
import medicine from '../assets/medicine.svg'
import doctor from '../assets/doctor.svg'
import Navbar from '../Elements/Navbar'
import Footer from '../Elements/Footer'


{  /* -------------------------------------------- About Component ------------------------------------------------------------- */}

function About() {
  return (
<>
<Navbar/>
    <div className="container p-3">

  <div className="row g-3">

    <div className="col  text-white rounded mx-3 p-3 card-custom d-flex justify-content-between"> <img src={shop} alt="icon" className="icon-img me-2" /> <div className="my-auto text-dark">
    <div className="fw-bold">Pharmacy near Me</div>
    <small className="text-muted">FIND NOW</small>
  </div> </div>
    <div className="col  text-white rounded mx-3 p-3 card-custom-2 d-flex justify-content-between"> <img src={medicine} alt="icon" className="icon-img me-2" /> <div className="my-auto text-dark">
    <div className="fw-bold">Get 20% off on all Medicines</div>
    <small className="text-muted">ORDER NOW</small>
  </div> </div>
    <div className="col  text-white rounded mx-3 p-3 card-custom-3 d-flex justify-content-between">  <img src={health} alt="icon" className="icon-img me-2" /> <div className="my-auto text-dark">
    <div className="fw-bold">Health Insurance</div>
    <small className="text-muted">EXPLORE NOW</small>
  </div> </div>
    <div className="col  text-white rounded mx-3 p-3 card-custom-4 d-flex justify-content-between"> <img src={doctor} alt="icon" className="icon-img me-2" /> <div className="my-auto text-dark">
    <div className="fw-bold">Order With Prescription</div>
    <small className="text-muted">ORDER NOW</small>
  </div></div>
    <div className="col text-white rounded mx-3 p-3 card-custom-5 d-flex justify-content-between"> <img src={lab} alt="icon" className="icon-img me-2" /> <div className="my-auto text-dark">
    <div className="fw-bold">Covid Essentials</div>
    <small className="text-muted">AT HOME</small>
  </div>  </div>
  </div>
</div>

{/* -------------------------------------------- About Section ------------------------------------------------------------- */}













{/* -------------------------------------------- Browse By Health Conditions Section ------------------------------------                    */}



<div className="container text-center p-3">
  

  <h2 className="mb-4 fw-bold ">
    <span className='text-success'>Browse By Health </span>Conditions</h2>



  <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
    <div className="col">
      <div class="p-3 border bg-light rounded-pill">
        <img src={diabetes} alt="icon" className="icon-img me-2" />
        Diabetes Care</div>
    </div>
    <div className="col">
      <div class="p-3 border bg-light rounded-pill"> 
        <img src={oral} alt="icon" className="icon-img me-2" />
      Oral Care</div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light rounded-pill">
        <img src={stomach} alt="icon" className="icon-img me-2" />
        Stomach Care</div>
    </div>
    <div className="col">
      <div class="p-3 border bg-light rounded-pill">
        <img src={pain} alt="icon" className="icon-img me-2" />
        Pain Rlief</div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light rounded-pill">
        <img src={liver} alt="icon" className="icon-img me-2" />
        Liver Care</div>
    </div>
    <div className="col">
      <div class="p-3 border bg-light rounded-pill"> 
        <img src={old} alt="icon" className="icon-img me-2" />
        Elder Care</div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light rounded-pill">
        <img src={cold} alt="icon" className="icon-img me-2" />
        Cold & Immunity</div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light rounded-pill">
        <img src={sexual} alt="icon" className="icon-img me-2" />
        Sexual Health</div>
    </div>
    <div className="col">
      <div class="p-3 border bg-light rounded-pill">.
      <img src={respiration} alt="icon" className="icon-img me-2" />
      
      Respiratory Care</div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light rounded-pill">
        <img src={cardiac} alt="icon" className="icon-img me-2" />
        Cardiac Care</div>
    </div>
  </div>
</div>



{/* -------------------------------------------- Browse By Health Conditions Section End -------------------------------------------------- */}









{/* -------------------------------------------- Carousel Section ------------------------------------------------------------------ */}


<div id="carouselExampleControls" className="carousel slide p-3" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
  <img src="/c1.jpg" className="d-block  img-thumbnail w-100 rounded "   alt="..."/> 
    </div>
    <div className="carousel-item">  
  <img src="/c2.jpg" className="d-block img-thumbnail  w-100  rounded"  alt="..." />
    </div>
    <div className="carousel-item">
  <img src="/c3.jpg" className="d-block  img-thumbnail w-100 rounded"   alt="..." /> 
    </div>
    <div className="carousel-item">
  <img src="/c4.jpg" className="d-block img-thumbnail  w-100 rounded"   alt="..." /> 
    </div>
    <div className="carousel-item">
  <img src="/c5.jpg" className="d-block img-thumbnail  w-100 rounded"   alt="..." /> 
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>






{/*--------------------------------------------- Carousel Section End ------------------------------------------------------------------ */}




















{/* -------------------------------------------- New Launches Section ------------------------------------------------------------- */}

<div className="container  ">
  <h2 className="mb-4 fw-bold text-center">New <span className='text-success'>Launches</span></h2>
  <div className="row g-4">
    
   
    <div className="col-12 col-sm-6 col-md-4 col-lg-2 ">
      <div className="card shadow-sm border-0 rounded-3 h-100">
        <img src="/medicine5.webp" className="card-img-top img-thumbnail rounded d-block w-100 slider-img" alt="Product Image"/>
        <div className="card-body ">
          <h6 className="card-title">Dailyiron Tablet</h6>
          <p className="text-muted mb-1">
            ₹85.5 <del className="text-secondary">₹88.5</del>
            <span className="text-success fw-bold">2% off</span>
          </p>
          <p className="small text-muted">Dailyiron Tablet is used to treat anaemia</p>
          <a href="#" className="btn  btn-primary w-100">Add to Cart</a>
        </div>
      </div>
    </div>

 
    <div className="col-12 col-sm-6 col-md-4 col-lg-2 ">
      <div className="card shadow-sm border-0 rounded-3 h-100">
        <img src="/medicine3.webp" className="card-img-top img-thumbnail rounded d-block w-100 slider-img img-fluid fixed-img"  alt="Product Image"/>
        <div className="card-body">
          <h6 className="card-title">Multivate Fm Omega</h6>
          <p class="text-muted mb-1">
            ₹139 <del className="text-secondary">₹142</del>
            <span className="text-success fw-bold">2% off off</span>
          </p>
          <p className="small text-muted">Multivite FM Omega capsule </p>
          <a href="#" className="btn btn-primary w-100">Add to Cart</a>
        </div>
      </div>
    </div>

  
    <div className="col-12 col-sm-6 col-md-4 col-lg-2 ">
      <div className="card shadow-sm border-0 rounded-3 h-100">
  <img src="/serum.webp" className="card-img-top img-thumbnail rounded d-block w-100 slider-img img-fluid fixed-img" alt="Product Image"/>
        <div className="card-body">
          <h6 className="card-title">La Shield Expert Urban</h6>
          <p className="text-muted mb-1">
            ₹252 <del class="text-secondary">₹256</del>
            <span className="text-success fw-bold">3% off</span>
          </p>
          <p className="small text-muted">La Shield Sunscreen SPF</p>
          <a href="#" class="btn btn-primary w-100">Add to Cart</a>
        </div>
      </div>
    </div>

  
    <div className="col-12 col-sm-6 col-md-4 col-lg-2 ">
      <div className="card shadow-sm border-0 rounded-3 h-200">
        <img src="/medicine1.webp" class="card-img-top img-thumbnail rounded d-block w-100 slider-img img-fluid fixed-img" alt="Product Image"/>
        <div className="card-body">
          <h6 className="card-title">Neurobion Forte Tablet 30's</h6>
          <p className="text-muted mb-1">
            ₹42.5 <del className="text-secondary">₹46.5</del>
            <span className="text-success fw-bold">2% off</span>
          </p>
          <p className="small text-muted">Combination of B </p>
          <a href="#" className="btn btn-primary w-100">Add to Cart</a>
        </div>
      </div>
    </div>


<div className="col-12 col-sm-6 col-md-4 col-lg-2 ">
      <div className="card shadow-sm border-0 rounded-3 h-200">
  <img src="/TABLET.webp" class="card-img-top img-thumbnail rounded d-block w-100 slider-img img-fluid fixed-img" alt="Product Image"/>
        <div className="card-body">
          <h6 className="card-title">I Pink-XT Tablet</h6>
          <p className="text-muted mb-1">
            ₹105 <del className="text-secondary">108</del>
            <span className="text-success fw-bold">2% off</span>
          </p>
          <p className="small text-muted">FERROUS BISGLYCINATE-60MG</p>
          <a href="#" className="btn btn-primary w-100">Add to Cart</a>
        </div>
      </div>
    </div>



<div className="col-12 col-sm-6 col-md-4 col-lg-2 ">
      <div className="card shadow-sm border-0 rounded-3 h-200">
  <img src="/ENO1.webp" class="card-img-top img-thumbnail rounded d-block w-100 slider-img img-fluid fixed-img" alt="Product Image"/>
        <div className="card-body">
          <h6 className="card-title">ENO Fruit Salt Lemon Flavour</h6>
          <p className="text-muted mb-1">
            ₹62 <del className="text-secondary">₹66.5</del>
            <span className="text-success fw-bold">3% off</span>
          </p>
          <p className="small text-muted">Powder is a versatile</p>
          <a href="#" className="btn btn-primary w-100">Add to Cart</a>
        </div>
      </div>
    </div>


  </div>
</div>




{/* -------------------------------------------- New Launches Section End ------------------------------------------------------------- */}














{/* -------------------------------------------- Shop By Brands Section ------------------------------------------------------------- */}

<div className="container p-3">
  <h2 className="mb-4 fw-bold text-center"> <span className='text-success'>Shop</span> By Brands</h2>

  <div id="pharmacyCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">

     
      <div className="carousel-item active">
        <div className="row g-4">
          <div className="col-md-3 p-3">
            <div className=" shadow-sm border-0 h-100">
              <img src="/sp1.webp" className="card-img-top img-thumbnail rounded" />
              
            </div>
          </div>

          <div className="col-md-3 p-3">
            <div className=" shadow-sm border-0 h-100">
              <img src="/sp2.webp" className="card-img-top img-thumbnail rounded"/>
              
            </div>
          </div>

          <div className="col-md-3 p-3">
            <div className="shadow-sm border-0 h-100">
              <img src="/sp3.webp" className="card-img-top img-thumbnail rounded"/>
            </div>
          </div>

          <div className="col-md-3 p-3">
            <div className="shadow-sm border-0 h-100">
              <img src="/sp4.webp" className="card-img-top img-thumbnail rounded"/>
             
            </div>
          </div>
        </div>
      </div>

      
      <div className="carousel-item">
        <div className="row g-4">
          <div className="col-md-3 p-3">
            <div className=" shadow-sm border-0 h-100">
              <img src="/sp5.webp" className="card-img-top img-thumbnail rounded"/>
            </div>
          </div>

          <div className="col-md-3 p-3">
            <div className="shadow-sm border-0 h-100">
              <img src="/sp6.webp" className="card-img-top img-thumbnail rounded"/>
              
            </div>
          </div>

          <div className="col-md-3 p-3">
            <div className="shadow-sm border-0 h-100">
              <img src="/sp7.webp" className="card-img-top img-thumbnail rounded"/>
              
            </div>
          </div>

          <div className="col-md-3 p-3">
            <div className=" shadow-sm border-0 h-100">
              <img src="/sp8.webp" className="card-img-top img-thumbnail rounded"/>
              
            </div>
          </div>
        </div>
      </div>

    </div>

   
    <button className="carousel-control-next" type="button" data-bs-target="#pharmacyCarousel" data-bs-slide="prev">
      <span className="carousel-control-next-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#pharmacyCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon"></span>
    </button>

  </div>
</div>

{/* -------------------------------------------- Shop By Brands Section End ------------------------------------------------------------- */}























{/* -------------------------------------------- Pharmacy Products Section ------------------------------------------------------------- */}

<div className="container p-3">
  <h2 className="mb-4 fw-bold text-center"> <span className='text-success'>Pharmacy </span> Products</h2>

  <div id="pharmacyCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">

     
      <div className="carousel-item active">
        <div className="row g-4">
          <div className="col-md-2">
            <div className="card shadow-sm border-0 h-100 ">
              <img src="/ors.webp" className="card-img-top img-thumbnail rounded" />
              <div className="card-body">
                <h6>Prolyte ORS Nimbu Pani</h6>
                <p className="text-muted mb-1">₹28 <del>₹31.5</del> <span className="text-success">2% off</span></p>
                <p className="small text-muted">Prolyte ORS Nimbu Pani Flavour Energy Drink,</p>
                <a href="#" className="btn btn-primary w-100">Add to Cart</a>
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="card shadow-sm border-0 h-100 ">
              <img src="/medicine6.webp" className="card-img-top img-thumbnail rounded"/>
              <div className="card-body">
                <h6>Liquid Paraffin</h6>
                <p className="text-muted mb-1">₹68 <del>₹70</del> <span className="text-success">1.5% off</span></p>
                <p className="small text-muted">skin problems associated with eczema and dermatitis.</p>
                <a href="#" className="btn btn-primary w-100">Add to Cart</a>
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="card shadow-sm border-0 h-100 ">
              <img src="/sn2.webp" className="card-img-top img-thumbnail rounded"/>
              <div className="card-body">
                <h6>Dettol Original Instant Hand</h6>
                <p className="text-muted mb-1">₹32<del>₹35.5</del> <span class="text-success">2% off</span></p>
                <p className="small text-muted">Experience the optimal on-the-go protection</p>
                <a href="#" className="btn btn-primary w-100">Add to Cart</a>
              </div>
            </div>
          </div>


          <div className="col-md-2">
            <div className="card shadow-sm border-0 h-100 ">
              <img src="/sensodine.webp" className="card-img-top img-thumbnail rounded"/>
              <div className="card-body">
                <h6>Sensodyne Repair & Protect Toothpaste</h6>
                <p className="text-muted mb-1">₹260 <del>₹263</del> <span class="text-success">1.5% off</span></p>
                <p className="small text-muted">Sensodyne Repair and Protect Toothpaste</p>
                <a href="#" className="btn btn-primary w-100">Add to Cart</a>
              </div>
            </div>
          </div>



          <div className="col-md-2">
            <div className="card shadow-sm border-0 h-100 ">
              <img src="/vic.webp" className="card-img-top img-thumbnail rounded"/>
              <div className="card-body">
                <h6>Vicks Vaporub, 25 mll</h6>
                <p className="text-muted mb-1">₹108 <del>₹110</del> <span class="text-success">0.5 off</span></p>
                <p className="small text-muted">contains menthol, camphor and eucalyptus oil,</p>
                <a href="#" className="btn btn-primary w-100">Add to Cart</a>
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="card shadow-sm border-0 h-100 ">
              <img src="/Bp meter.webp" className="card-img-top img-thumbnail rounded"/>
              <div className="card-body">
                <h6>BP Monitor</h6>
                <p className="text-muted mb-1">₹899 <del>₹1055</del> <span className="text-success">11% off</span></p>
                <p className="small text-muted">Blood pressure monitors helps you monitor your blood pressure</p>
                <a href="#" className="btn btn-primary w-100">Add to Cart</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="carousel-item card">
        <div className="row g-4">
          <div className="col-md-2">
            <div className="card shadow-sm border-0 h-100 ">
              <img src="/volini.webp" className="card-img-top img-thumbnail rounded"/>
              <div className="card-body">
                <h6>N95 Face Mask</h6>
                <p className="text-muted mb-1">₹50 <del>₹70</del> <span className="text-success">28% off</span></p>
                <p className="small text-muted">High filtration efficiency</p>
                <a href="#" className="btn btn-primary w-100">Add to Cart</a>
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="card shadow-sm border-0 h-100 ">
              <img src="/zandu.webp" className="card-img-top img-thumbnail rounded"/>
              <div className="card-body">
                <h6>Digital Thermometer</h6>
                <p className="text-muted mb-1">₹299 <del>₹350</del> <span class="text-success">14% off</span></p>
                <p className="small text-muted">Quick & accurate readings</p>
                <a href="#" className="btn btn-primary w-100">Add to Cart</a>
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="card shadow-sm border-0 h-100 ">
              <img src="/protein.webp" className="card-img-top img-thumbnail rounded"/>
              <div className="card-body">
                <h6>Glucometer</h6>
                <p className="text-muted mb-1">₹999 <del>₹1,200</del> <span className="text-success">17% off</span></p>
                <p className="small text-muted">Blood sugar monitor</p>
                <a href="#" className="btn btn-primary w-100">Add to Cart</a>
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="card shadow-sm border-0 h-100 ">
              <img src="/chamamparas.webp" className="card-img-top img-thumbnail rounded"/>
              <div className="card-body">
                <h6>Protein Powder</h6>
                <p className="text-muted mb-1">₹1,499 <del>₹1,800</del> <span className="text-success">17% off</span></p>
                <p className="small text-muted">Boosts strength & energy</p>
                <a href="#" className="btn btn-primary w-100">Add to Cart</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

   
    <button className="carousel-control-next" type="button" data-bs-target="#pharmacyCarousel" data-bs-slide="prev">
      <span className="carousel-control-next-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#pharmacyCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon"></span>
    </button>

  </div>
</div>


{/* -------------------------------------------- Pharmacy Products Section End ------------------------------------------------------------- */}
























{/* -------------------------------------------- Carousel Section ------------------------------------------------------------- */}

<div id="myCarousel" class="carousel slide p-3" data-bs-ride="carousel">

   <h2 className="mb-4 fw-bold text-center">India’s Largest <span className='text-success'> Healthcare Platform</span></h2>
  <div className="carousel-inner">

   
    <div className="carousel-item active">
      <div className="row">
        <div className="col-md-6">
          <img src="/Save.png" className="d-block w-100" alt="Image 1"/>
        </div>
        <div className="col-md-6">
          <img src="/80%.png" className="d-block w-100" alt="Image 2"/>
        </div>
      </div>
    </div>

  
    

  </div>

</div>
<Footer/>
</>
   
  )
}

export default About