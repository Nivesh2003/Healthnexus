import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Appointment.css";
import Navbar from "../Elements/Navbar";
import Footer from "../Elements/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { useRef } from "react";

const stripePromise = loadStripe("pk_test_51Rvv1xJCsoKPd0cPHYMfKkTlxO9rCXl0imzzbNmQrsGGBERPKi9ZHFQW65zXMfn9aRjwrtoxlAVZlneInRQR7RG800hkgTjiva");

export default function AppointmentPage() {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [reason, setReason] = useState("");
  const [appointmentSent, setAppointmentSent] = useState(false);

  const nav = useNavigate();

  // Fetch doctors
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
      .catch((err) => console.error(err));
  }, []);

// On mount → check if returning from Stripe payment
const appointmentSubmittedRef = useRef(false);

useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const doctorData = JSON.parse(sessionStorage.getItem("selectedDoctor"));
  const formData = JSON.parse(sessionStorage.getItem("appointmentForm"));

  if (params.get("payment") === "success" && doctorData && formData && !appointmentSubmittedRef.current) {
    setSelectedDoctor(doctorData);
    setShowForm(true); // show form modal

    const submitAfterPayment = async () => {
      if (appointmentSubmittedRef.current) return; // guard
      appointmentSubmittedRef.current = true;      // mark as submitted

      try {
        await axios.post("http://localhost:8000/api/appointments/create/specific", {
          patientId: sessionStorage.getItem("userId"),
          doctorId: doctorData._id,
          preferredDate: formData.preferredDate,
          preferredTime: formData.preferredTime,
          reason: formData.reason,
        });
        setAppointmentSent(true);
        alert("Appointment request sent");
      } catch (err) {
        console.error(err);
        alert("Failed to create appointment");
      } finally {
        sessionStorage.removeItem("selectedDoctor");
        sessionStorage.removeItem("appointmentForm");
        sessionStorage.removeItem("appointmentSubmitted");
        window.history.replaceState({}, document.title, "/find-doctor");
      }
    };

    submitAfterPayment();
  }
}, []);

  

  const handleBookClick = (doctor) => {
    if (!sessionStorage.getItem("userId")) {
      window.alert("Please first Login to book");
      nav("/login");
      return;
    }
    setSelectedDoctor(doctor);
    setShowForm(true);
  };

  // Save form changes to sessionStorage
  const handleFormChange = (field, value) => {
    if (field === "date") setPreferredDate(value);
    if (field === "time") setPreferredTime(value);
    if (field === "reason") setReason(value);

    const formData = {
      preferredDate: field === "date" ? value : preferredDate,
      preferredTime: field === "time" ? value : preferredTime,
      reason: field === "reason" ? value : reason,
    };
    sessionStorage.setItem("appointmentForm", JSON.stringify(formData));
  };

  // Start payment
  const handlePayment = async () => {
    sessionStorage.setItem("selectedDoctor", JSON.stringify(selectedDoctor));
    try {
      const res = await axios.post("http://localhost:8000/api/payment/create-checkout-session", {
        doctorName: selectedDoctor.fullName,
        doctorFee: selectedDoctor.fee,
      });

      const stripe = await stripePromise;
      await stripe.redirectToCheckout({ sessionId: res.data.id });
    } catch (err) {
      console.error(err);
      alert("Error starting payment");
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Just trigger payment, actual submission happens after success
    handlePayment();
  };

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
            <div className="col-9 p-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="fw-bold mb-0">Doctor List</h5>
                <div className="input-group" style={{ width: "250px" }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Doctor"
                    value={searchTerm}
                    onChange={(e) => handleSearch(e)}
                  />
                  <span className="input-group-text">🔍</span>
                </div>
              </div>

              <div className="row g-3">
                {filteredDoctors.map((doctor) => (
                  <div key={doctor._id} className="col-6">
                    <div className="card h-100">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <img
                            src={
                              doctor.image
                                ? `http://localhost:8000/image/users/${doctor.image}`
                                : "http://localhost:8000/image/users/doctor.jpg"
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
                            <small className="text-muted">Doctor ID: {doctor.d_id || "N/A"}</small>
                            <br />
                            <small className="text-muted">Fee: ₹{doctor.fee || 1}</small>
                          </div>
                        </div>

                        <button
                          className="btn btn-outline-primary w-100 mb-2"
                          onClick={() => setSelectedDoctor(doctor)}
                        >
                          View Details
                        </button>

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

                {showForm && selectedDoctor && (
                  <div
                    style={{
                      position: "fixed",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      zIndex: 2000,
                    }}
                  >
                    <div
                      style={{
                        width: "450px",
                        padding: "30px",
                        borderRadius: "15px",
                        background: "rgba(255, 255, 255, 0.15)",
                        backdropFilter: "blur(15px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                        color: "#fff",
                      }}
                    >
                      <h3 style={{ marginBottom: "20px", textAlign: "center" }}>
                        Book Appointment with {selectedDoctor.fullName}
                      </h3>

                      {appointmentSent ? (
                        <p style={{ textAlign: "center", fontWeight: "bold", color: "#0f0" }}>
                          Appointment request sent ✅
                        </p>
                      ) : (
                        <form onSubmit={handleSubmit}>
                          <label>Preferred Date</label>
                          <input
                            type="date"
                            value={preferredDate}
                            onChange={(e) => handleFormChange("date", e.target.value)}
                            required
                            style={{ width: "100%", padding: "10px", marginBottom: "15px", borderRadius: "8px", border: "none" }}
                          />

                          <label>Preferred Time</label>
                          <input
                            type="time"
                            value={preferredTime}
                            onChange={(e) => handleFormChange("time", e.target.value)}
                            required
                            style={{ width: "100%", padding: "10px", marginBottom: "15px", borderRadius: "8px", border: "none" }}
                          />

                          <label>Reason</label>
                          <textarea
                            value={reason}
                            onChange={(e) => handleFormChange("reason", e.target.value)}
                            required
                            style={{ width: "100%", padding: "10px", marginBottom: "15px", borderRadius: "8px", border: "none", resize: "none", height: "80px" }}
                          />

                          <button
                            type="submit"
                            style={{ background: "rgba(255, 255, 255, 0.3)", border: "none", padding: "10px 20px", borderRadius: "8px", cursor: "pointer", color: "#fff", width: "100%" }}
                          >
                            Complete Payment
                          </button>
                        </form>
                      )}

                      <button
                        type="button"
                        onClick={() => setShowForm(false)}
                        style={{ background: "rgba(255, 255, 255, 0.1)", border: "none", padding: "10px 20px", borderRadius: "8px", cursor: "pointer", color: "#fff", width: "100%", marginTop: "10px" }}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="col-3 bg-white border-start p-4">
              <h5 className="fw-bold mb-4">Detail Doctor</h5>
              {selectedDoctor ? (
                <>
                  <div className="text-center mb-3">
                    <img
                      src={selectedDoctor?.image ? `http://localhost:8000/image/users/${selectedDoctor.image}` : "/placeholder.png"}
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
                  <p>Consulation Fee: ₹{selectedDoctor.fee || 1} </p>
                  <p>Available on: <b>MON , FRI , THURS</b></p>
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
