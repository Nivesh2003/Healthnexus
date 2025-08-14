import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Appointment.css";
import Navbar from "../Elements/Navbar";
import Footer from "../Elements/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51Rvv1xJCsoKPd0cPHYMfKkTlxO9rCXl0imzzbNmQrsGGBERPKi9ZHFQW65zXMfn9aRjwrtoxlAVZlneInRQR7RG800hkgTjiva"); // replace with your Stripe key

export default function AppointmentPage() {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [reason, setReason] = useState("");

  const nav = useNavigate();

  // Fetch doctors from backend
  useEffect(() => {
    fetch("http://localhost:8000/api/users/doctors")
      .then((res) => res.json())
      .then((data) => {
        if (data.msg === "success") {
          setDoctors(data.value);
          setFilteredDoctors(data.value);
          setSelectedDoctor(data.value[0] || null);
        }
      })
      .catch((err) => console.error("Error fetching doctors:", err));
  }, []);

  // Check Stripe redirect after payment
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const doctorData = JSON.parse(sessionStorage.getItem("selectedDoctor"));
  
    if (params.get("payment") === "success" && doctorData) {
      setSelectedDoctor(doctorData);
      setShowForm(true);
      sessionStorage.removeItem("selectedDoctor");
  
      // Clean the URL so the form doesn't reopen on refresh
      window.history.replaceState({}, document.title, "/find-doctor");
    }
  }, []);
  
  

  // Handle Book Now click → Stripe payment
  const handleBookClick = async (doctor) => {
    if (!sessionStorage.getItem("userId")) {
      window.alert("Please first Login to book");
      nav("/login");
      return;
    }

    sessionStorage.setItem("selectedDoctor", JSON.stringify(doctor));

    try {
      const res = await axios.post(
        "http://localhost:8000/api/payment/create-checkout-session",
        {
          doctorName: doctor.fullName,
          doctorFee: doctor.fee,
        }
      );

      const stripe = await stripePromise;
      await stripe.redirectToCheckout({ sessionId: res.data.id });
    } catch (err) {
      console.error(err);
      alert("Error starting payment");
    }
  };

  // Submit appointment form
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/appointments/create/specific", {
        patientId: sessionStorage.getItem("userId"),
        doctorId: selectedDoctor._id,
        preferredDate,
        preferredTime,
        reason,
      });
      alert("Appointment request sent");
      setShowForm(false);
    } catch (err) {
      console.error(err);
      alert("Failed to create appointment");
    }
  };

  // Search filter
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filtered = doctors.filter(
      (doc) =>
        doc.fullName.toLowerCase().includes(term.toLowerCase()) ||
        (doc.speciality || "").toLowerCase().includes(term.toLowerCase())
    );
    setFilteredDoctors(filtered);
  };

  return (
    <>
      <Navbar />
      <div className="d-flex min-vh-100" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="flex-grow-1">
          <div className="bg-white border-bottom px-4 py-3 d-flex justify-content-between align-items-center">
            <h4 className="mb-0 fw-bold">Best Doctors</h4>
          </div>

          <div className="row g-0">
            {/* Doctor List */}
            <div className="col-9 p-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="fw-bold mb-0">Doctor List</h5>
                <div className="input-group" style={{ width: "250px" }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Doctor"
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                  />
                  <span className="input-group-text">🔍</span>
                </div>
              </div>

              <div className="row g-3">
              {filteredDoctors.map((doctor) => (
  <div key={doctor._id} className="col-6">
    <div className="card h-100">
      <div className="card-body">
        {/* Doctor Info */}
        <div className="d-flex align-items-center mb-3">
        <img
  src={
    doctor.image
      ? `http://localhost:8000/image/users/${doctor.image}`
      : "/placeholder.png"
  }
  alt={doctor.fullName}
  className="rounded-circle me-3"
  width="80"
  height="80"
  style={{ objectFit: "cover" }}
/>

          <div>
            <h6 className="fw-bold mb-1">{doctor.fullName}</h6>
            <small className="text-muted">
              Speciality: {doctor.speciality || "N/A"}
            </small>
            <br />
            <small className="text-muted">
              Doctor ID: {doctor.d_id || "N/A"}
            </small>
            <br />
            <small className="text-muted">
  Fee: ₹{doctor.fee || 1}
</small>

          </div>
        </div>

        {/* View Details */}
        <button
          className="btn btn-outline-primary w-100 mb-2"
          onClick={() => setSelectedDoctor(doctor)}
        >
          View Details
        </button>

        {/* Book Doctor */}
        <button
          className="btn btn-success w-100"
          onClick={() => handleBookClick(doctor)}
        >
          Book Doctor
        </button>
      </div>
    </div>
  </div>
))}

{/* Booking Form Renders Only Once */}
{showForm && selectedDoctor && (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2000,
    }}
  >
    <form
      onSubmit={submitForm}
      style={{
        width: '450px',
        padding: '30px',
        borderRadius: '15px',
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(15px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
        color: '#fff',
      }}
    >
      <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>
        Book Appointment with {selectedDoctor.fullName}
      </h3>

      <label>Preferred Date</label>
      <input
        type="date"
        value={preferredDate}
        onChange={(e) => setPreferredDate(e.target.value)}
        required
        style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '8px', border: 'none' }}
      />

      <label>Preferred Time</label>
      <input
        type="time"
        value={preferredTime}
        onChange={(e) => setPreferredTime(e.target.value)}
        required
        style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '8px', border: 'none' }}
      />

      <label>Reason</label>
      <textarea
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        required
        style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '8px', border: 'none', resize: 'none', height: '80px' }}
      />

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button
          type="submit"
          style={{
            background: 'rgba(255, 255, 255, 0.3)',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '8px',
            cursor: 'pointer',
            color: '#fff',
          }}
        >
          Submit
        </button>
        <button
          type="button"
          onClick={() => setShowForm(false)}
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '8px',
            cursor: 'pointer',
            color: '#fff',
          }}
        >
          Close
        </button>
      </div>
    </form>
  </div>
)}

              </div>

              {filteredDoctors.length === 0 && (
                <div className="text-center mt-4">
                  <p className="text-muted">No doctors found.</p>
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => {
                      setSearchTerm("");
                      setFilteredDoctors(doctors);
                    }}
                  >
                    Clear Search
                  </button>
                </div>
              )}
            </div>

            {/* Detail Doctor */}
            <div className="col-3 bg-white border-start p-4">
            <h5 className="fw-bold mb-4">Detail Doctor</h5>
             {selectedDoctor ? (
         <>
<div className="text-center mb-3">
  <img
    src={
      selectedDoctor?.image
        ? `http://localhost:8000/image/users/${selectedDoctor.image}`
        : "/placeholder.png"
    }
    alt={selectedDoctor?.fullName || "Doctor"}
    className="rounded-circle"
    width="120"
    height="120"
    style={{ objectFit: "cover" }}
  />
</div>

      <h5>{selectedDoctor.fullName}</h5>
      <p>Speciality: {selectedDoctor.speciality || "N/A"}</p>
      <p>Doctor ID: {selectedDoctor.d_id || "N/A"}</p>
      <p>More details coming soon...</p>
    </>
  ) : (
      <p className="text-muted">Select a doctor to see details</p>
  )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
