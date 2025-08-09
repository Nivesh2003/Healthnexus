"use client"
import '../../src/App.css'
import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"

// Doctor data
const doctorsData = [
  {
    id: 1,
    name: "Dr. Ralph Edwards",
    specialty: "Dermatologist",
    rate: 20,
    image: "/doc7.webp",
    experience:
      "Over 10 years in clinical dermatology, treating a wide range of conditions from acne to autoimmune skin disorders.",
    specialties: ["General Dermatology", "Skin Allergy Treatment", "Acne & Scarring Care"],
    rating: 4,
    review:
      "Dr. Edwards was clear, caring and professional. My skin improved significantly thanks to his treatment plan. Highly recommended!",
  },
  {
    id: 2,
    name: "Dr. Ronald Richards",
    specialty: "Neurologist",
    rate: 20,
    image: "/doc3.jpg",
    experience: "15+ years specializing in neurological disorders and brain health treatments.",
    specialties: ["Brain Disorders", "Epilepsy Treatment", "Neurological Rehabilitation"],
    rating: 5,
    review: "Excellent neurologist with deep expertise. Very thorough in diagnosis and treatment.",
  },
  {
    id: 3,
    name: "Dr. Albert Boje",
    specialty: "Dentist",
    rate: 20,
    image: "/doc7.webp",
    experience: "12 years of dental practice focusing on preventive and cosmetic dentistry.",
    specialties: ["General Dentistry", "Cosmetic Procedures", "Oral Surgery"],
    rating: 4,
    review: "Great dentist! Professional service and pain-free procedures.",
  },
  {
    id: 4,
    name: "Dr. Floyd Miles",
    specialty: "Neurologist",
    rate: 20,
    image: "/doc4.jpg",
    experience: "8 years in neurology with focus on movement disorders and stroke care.",
    specialties: ["Movement Disorders", "Stroke Care", "Headache Treatment"],
    rating: 4,
    review: "Very knowledgeable and caring doctor. Helped me manage my condition effectively.",
  },
  {
    id: 5,
    name: "Dr. Leslie Alexander",
    specialty: "Psychiatrist",
    rate: 20,
    image: "/doc5.webp",
    experience: "10+ years in mental health, specializing in anxiety and depression treatment.",
    specialties: ["Anxiety Treatment", "Depression Therapy", "Cognitive Behavioral Therapy"],
    rating: 5,
    review: "Compassionate psychiatrist who really listens and provides effective treatment.",
  },
  {
    id: 6,
    name: "Prof. Brooklyn Crean",
    specialty: "General Practitioner",
    rate: 30,
    image: "/doc4.jpg",
    experience: "20+ years in family medicine and preventive healthcare.",
    specialties: ["Family Medicine", "Preventive Care", "Health Screenings"],
    rating: 5,
    review: "Excellent family doctor with comprehensive approach to healthcare.",
  },
  {
    id: 7,
    name: "Dr. Courtney Henry",
    specialty: "Cardiologist",
    rate: 20,
    image: "/doc3.jpg",
    experience: "14 years specializing in heart conditions and cardiovascular health.",
    specialties: ["Heart Disease", "Hypertension", "Cardiac Surgery"],
    rating: 4,
    review: "Top-notch cardiologist with excellent bedside manner.",
  },
  {
    id: 8,
    name: "Prof. Eleanor Pena",
    specialty: "Psychiatrist",
    rate: 32,
    image: "/doc5.webp",
    experience: "18+ years in psychiatric care and mental health research.",
    specialties: ["Bipolar Disorder", "PTSD Treatment", "Medication Management"],
    rating: 5,
    review: "Outstanding psychiatrist with deep understanding of mental health conditions.",
  },
]

// Time slots data
const timeSlots = [
  "08:00 AM",
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:30 PM",
  "01:30 PM",
  "02:30 PM",
  "03:30 PM",
  "04:30 PM",
  "05:30 PM",
]

// Calendar data for June 2025
const calendarDays = [
  [null, null, null, null, null, null, 1],
  [2, 3, 4, 5, 6, 7, 8],
  [9, 10, 11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20, 21, 22],
  [23, 24, 25, 26, 27, 28, 29],
  [30, 31, null, null, null, null, null],
]

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

// Function to generate calendar days for any month/year
const generateCalendarDays = (year, month) => {
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const calendar = []
  let week = new Array(7).fill(null)

  // Fill in the first week
  for (let i = firstDay; i < 7; i++) {
    week[i] = i - firstDay + 1
  }
  calendar.push([...week])

  // Fill remaining weeks
  let day = 8 - firstDay
  while (day <= daysInMonth) {
    week = new Array(7).fill(null)
    for (let i = 0; i < 7 && day <= daysInMonth; i++) {
      week[i] = day++
    }
    calendar.push([...week])
  }

  return calendar
}

export default function AppointmentPage() {
  // State variables
  const [selectedDate, setSelectedDate] = useState(4)
  const [selectedTime, setSelectedTime] = useState("")
  const [selectedDoctor, setSelectedDoctor] = useState(doctorsData[0])
  const [searchTerm, setSearchTerm] = useState("")
  const [patientConcern, setPatientConcern] = useState("")
  const [currentYear, setCurrentYear] = useState(2025)
  const [currentMonthIndex, setCurrentMonthIndex] = useState(5) // June = 5 (0-indexed)
  const [showBookingModal, setShowBookingModal] = useState(false)
  const [filteredDoctors, setFilteredDoctors] = useState(doctorsData)

  // Handle date selection
  const handleDateClick = (day) => {
    if (day) {
      setSelectedDate(day)
    }
  }

  // Handle time slot selection
  const handleTimeClick = (time) => {
    setSelectedTime(time)
  }

  // Handle doctor selection for details
  const handleDoctorSelect = (doctor) => {
    setSelectedDoctor(doctor)
  }

  // Handle search functionality
  const handleSearch = (term) => {
    setSearchTerm(term)
    const filtered = doctorsData.filter(
      (doctor) =>
        doctor.name.toLowerCase().includes(term.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(term.toLowerCase()),
    )
    setFilteredDoctors(filtered)
  }

  // Handle booking modal
  const handleBookNow = (doctor) => {
    setSelectedDoctor(doctor)
    setShowBookingModal(true)
  }

  // Handle patient concern submission
  const handleConcernSubmit = () => {
    if (patientConcern.trim()) {
      alert("Patient concern submitted successfully!")
      console.log("Patient Concern:", patientConcern)
    } else {
      alert("Please describe your concern before submitting.")
    }
  }

  // Format selected date
  const formatSelectedDate = () => {
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const date = new Date(currentYear, currentMonthIndex, selectedDate)
    const dayName = dayNames[date.getDay()]
    return `${dayName}, ${selectedDate} ${monthNames[currentMonthIndex]} ${currentYear}`
  }

  // Render star rating
  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating)
  }

  // Handle booking confirmation
  const handleBookingConfirm = () => {
    if (!selectedTime) {
      alert("Please select an appointment time.")
      return
    }

    const bookingDetails = {
      doctor: selectedDoctor.name,
      date: formatSelectedDate(),
      time: selectedTime,
      concern: patientConcern,
      cost: selectedDoctor.rate,
    }

    console.log("Booking Details:", bookingDetails)
    alert(
      `Appointment booked successfully!\n\nDoctor: ${bookingDetails.doctor}\nDate: ${bookingDetails.date}\nTime: ${bookingDetails.time}\nCost: $${bookingDetails.cost}`,
    )
    setShowBookingModal(false)
    setSelectedTime("")
    setPatientConcern("")
  }

  return (
    <div className="d-flex min-vh-100" style={{ backgroundColor: "#f8f9fa" }}>
      {/* Main Content */}
      <div className="flex-grow-1">
        {/* Header */}
        <div className="bg-white border-bottom px-4 py-3 d-flex justify-content-between align-items-center">
          <h4 className="mb-0 fw-bold">Appointment</h4>
          <div className="d-flex align-items-center gap-3">
            <span style={{ fontSize: "20px", cursor: "pointer" }} onClick={() => alert("Notifications")}>
              🔔
            </span>
            <div className="bg-primary text-white rounded p-2" style={{ cursor: "pointer" }}>
              <span style={{ fontSize: "16px" }}>☀</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <img
                src="/placeholder.svg?height=32&width=32"
                alt="Profile"
                className="rounded-circle"
                width="32"
                height="32"
              />
              <div>
                <small className="fw-bold">Razaan</small>
                <br />
                <small className="text-muted">razan@</small>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-0">
          {/* Booking Appointment Section */}
          <div className="col-3 bg-white border-end p-4">
            <h5 className="fw-bold mb-4">Booking Appointment</h5>

            {/* Calendar Header */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="mb-0">
                {monthNames[currentMonthIndex]} {currentYear}
              </h6>
              <div>
                <button
                  className="btn btn-sm btn-outline-secondary me-1"
                  onClick={() => {
                    if (currentMonthIndex === 0) {
                      setCurrentMonthIndex(11)
                      setCurrentYear(currentYear - 1)
                    } else {
                      setCurrentMonthIndex(currentMonthIndex - 1)
                    }
                    setSelectedDate(1) // Reset to first day of new month
                    setSelectedTime("") // Reset time selection
                  }}
                >
                  ‹
                </button>
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => {
                    if (currentMonthIndex === 11) {
                      setCurrentMonthIndex(0)
                      setCurrentYear(currentYear + 1)
                    } else {
                      setCurrentMonthIndex(currentMonthIndex + 1)
                    }
                    setSelectedDate(1) // Reset to first day of new month
                    setSelectedTime("") // Reset time selection
                  }}
                >
                  ›
                </button>
              </div>
            </div>

            {/* Calendar */}
            <div className="mb-4">
              <div className="row text-center mb-2">
                <div className="col">
                  <small className="text-danger">Sun</small>
                </div>
                <div className="col">
                  <small>Mon</small>
                </div>
                <div className="col">
                  <small>Tue</small>
                </div>
                <div className="col">
                  <small>Wed</small>
                </div>
                <div className="col">
                  <small>Thu</small>
                </div>
                <div className="col">
                  <small>Fri</small>
                </div>
                <div className="col">
                  <small>Sat</small>
                </div>
              </div>
              {generateCalendarDays(currentYear, currentMonthIndex).map((week, weekIndex) => (
                <div key={weekIndex} className="row text-center mb-1">
                  {week.map((day, dayIndex) => (
                    <div key={dayIndex} className="col">
                      {day && (
                        <span
                          className={`${
                            day === selectedDate
                              ? "bg-primary text-white rounded-circle px-2 py-1"
                              : dayIndex === 0
                                ? "text-danger"
                                : ""
                          }`}
                          onClick={() => handleDateClick(day)}
                          style={{ cursor: "pointer", userSelect: "none" }}
                        >
                          {day}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Selected Date */}
            <h6 className="fw-bold mb-3">{formatSelectedDate()}</h6>

            {/* Time Slots */}
            <div className="row g-2 mb-4">
              {timeSlots.map((time, index) => (
                <div key={index} className="col-6">
                  <button
                    className={`btn w-100 py-2 ${
                      selectedTime === time
                        ? "btn-primary"
                        : time === "11:00 AM"
                          ? "btn-outline-secondary text-muted"
                          : "btn-outline-secondary"
                    }`}
                    onClick={() => handleTimeClick(time)}
                    disabled={time === "11:00 AM"}
                  >
                    {time}
                  </button>
                </div>
              ))}
            </div>

            {/* Patient Concerns */}
            <h6 className="fw-bold mb-3">Patient Concerns</h6>
            <div className="mb-3">
              <label htmlFor="concern" className="form-label">
                Describe your concern
              </label>
              <textarea
                className="form-control mb-2"
                id="concern"
                rows="4"
                placeholder="Write your symptoms or issue here..."
                value={patientConcern}
                onChange={(e) => setPatientConcern(e.target.value)}
              />
              <button className="btn btn-primary w-100" onClick={handleConcernSubmit} disabled={!patientConcern.trim()}>
                Send Concern
              </button>
            </div>
          </div>

          {/* Doctor List Section */}
          <div className="col-6 p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="fw-bold mb-0">Doctor List</h5>
              <div className="d-flex gap-2">
                <div className="input-group" style={{ width: "250px" }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Conditions/Doctor"
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                  />
                  <span className="input-group-text">
                    <span>🔍</span>
                  </span>
                </div>
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => alert("Filter functionality coming soon!")}
                >
                  Filter <span>⚡</span>
                </button>
              </div>
            </div>

            {/* Doctor Cards Grid */}
            <div className="row g-3">
              {filteredDoctors.map((doctor) => (
                <div key={doctor.id} className="col-6">
                  <div className="card h-100">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-3">
                        <img
                          src={doctor.image || "/placeholder.svg"}
                          alt={doctor.name}
                          className="rounded-circle me-3"
                          width="100"
                          height="100"
                        />
                        <div>
                          <h6 className="fw-bold mb-1">{doctor.name}</h6>
                          <small className="text-muted d-flex align-items-center">
                            <span className="me-1">👤</span> {doctor.specialty}
                          </small>
                          <small className="text-muted d-flex align-items-center">
                            <span className="me-1">💲</span> ${doctor.rate}/hour
                          </small>
                        </div>
                      </div>
                      <div className="d-flex gap-2">
                        <button className="btn btn-primary flex-fill" onClick={() => handleBookNow(doctor)}>
                          Book Now
                        </button>
                        <button className="btn btn-outline-secondary" onClick={() => handleDoctorSelect(doctor)}>
                          Detail
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No results message */}
            {filteredDoctors.length === 0 && (
              <div className="text-center mt-4">
                <p className="text-muted">No doctors found matching your search.</p>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => {
                    setSearchTerm("")
                    setFilteredDoctors(doctorsData)
                  }}
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>

          {/* Detail Doctor Section */}
          <div className="col-3 bg-white border-start p-4">
            <h5 className="fw-bold mb-4">Detail Doctor</h5>

            <div className="text-center mb-4">
              <img
                src={selectedDoctor.image || "/placeholder.svg"}
                alt={selectedDoctor.name}
                className="rounded-circle mb-3"
                width="120"
                height="120"
              />
              <h5 className="fw-bold">{selectedDoctor.name}</h5>
              <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
                <span className="text-primary">👤</span>
                <span>{selectedDoctor.specialty}</span>
              </div>
              <div className="d-flex align-items-center justify-content-center gap-2">
                <span className="text-primary">💲</span>
                <span>${selectedDoctor.rate}/hour</span>
              </div>
            </div>

            <div className="mb-4">
              <h6 className="fw-bold d-flex align-items-center gap-2 mb-3">
                <span>🏆</span> Experience
              </h6>
              <p className="small text-muted">{selectedDoctor.experience}</p>
            </div>

            <div className="mb-4">
              <h6 className="fw-bold d-flex align-items-center gap-2 mb-3">
                <span>⭐</span> Speciality
              </h6>
              <ul className="small text-muted">
                {selectedDoctor.specialties.map((specialty, index) => (
                  <li key={index}>{specialty}</li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h6 className="fw-bold mb-3">Reviews</h6>
              <div className="d-flex align-items-center gap-1 mb-2">
                <span className="text-warning">{renderStars(selectedDoctor.rating)}</span>
              </div>
              <div className="bg-light rounded p-3">
                <p className="small mb-0">"{selectedDoctor.review}"</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Confirmation Modal */}
      {showBookingModal && (
        <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Appointment</h5>
                <button type="button" className="btn-close" onClick={() => setShowBookingModal(false)}></button>
              </div>
              <div className="modal-body">
                <div className="text-center mb-4">
                  <img
                    src={selectedDoctor.image || "/placeholder.svg"}
                    alt={selectedDoctor.name}
                    className="rounded-circle mb-3"
                    width="80"
                    height="80"
                  />
                  <h6 className="fw-bold">{selectedDoctor.name}</h6>
                  <small className="text-muted">{selectedDoctor.specialty}</small>
                </div>

                <div className="row mb-3">
                  <div className="col-6">
                    <strong>Date:</strong>
                    <br />
                    <span>{formatSelectedDate()}</span>
                  </div>
                  <div className="col-6">
                    <strong>Time:</strong>
                    <br />
                    <span className={selectedTime ? "text-success" : "text-danger"}>
                      {selectedTime || "Please select time"}
                    </span>
                  </div>
                </div>

                <hr />

                <div className="mb-3">
                  <strong>Consultation Fee:</strong> ${selectedDoctor.rate}
                </div>

                {patientConcern && (
                  <div className="mb-3">
                    <strong>Patient Concern:</strong>
                    <br />
                    <small className="text-muted">{patientConcern}</small>
                  </div>
                )}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowBookingModal(false)}>
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleBookingConfirm}
                  disabled={!selectedTime}
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
