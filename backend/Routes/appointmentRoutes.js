const express = require('express');
const multer = require('multer');
const Appointment = require('../Models/appointmentModel');
const User = require('../Models/userMondel');

const AppointmentRouter = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, './public/image/appointments'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

//PAtient books specific doctor --nivesh 
AppointmentRouter.post('/create/specific', async (req, res) => {
  try {
    const { patientId, doctorId, preferredDate, preferredTime, reason } = req.body;

    // Ensure doctor exists
    const doctor = await User.findById(doctorId);
    if (!doctor || doctor.type !== 'doctor') {
      return res.status(404).json({ msg: "Doctor not found" });
    }

    // Create appointment for this single doctor
    const appointment = new Appointment({
      patientId,
      speciality: doctor.speciality,
      preferredDate,
      reason,
      requestedDoctorIds: [doctorId],
      acceptedDoctorId: null,
      status: 'pending',
      appointmentDate: null,
      preferredTime
    });

    await appointment.save();

    res.json({ msg: "Appointment request sent to doctor", appointment });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Patient sends appointment request to ALL doctors of a speciality
AppointmentRouter.post('/create', upload.single('idCard'), async (req, res) => {
  try {
    const { patientId, speciality, preferredDate, reason } = req.body;

    // Find all doctors with the given speciality
    const doctors = await User.find({ speciality, type: 'doctor' });

    if (!doctors.length) {
      return res.status(404).json({ msg: "No doctors found for this speciality" });
    }

    // Create one appointment with all requested doctor IDs
    const doctorIds = doctors.map(doc => doc._id);

    const appointment = new Appointment({
      patientId,
      speciality,
      preferredDate,
      reason,
      idCard: req.file ? req.file.path : null,
      requestedDoctorIds: doctorIds,
      acceptedDoctorId: null,
      status: 'pending',
      appointmentDate: null
    });

    await appointment.save();

    res.json({ msg: "Appointment request created", appointment });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Doctor gets all incoming pending requests addressed to them
AppointmentRouter.get('/doctor/:doctorId', async (req, res) => {
  try {
    const appointments = await Appointment.find({
      status: 'pending',
      requestedDoctorIds: req.params.doctorId
    }).populate('patientId', 'fullName email mobile');

    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Doctor accepts/rejects appointment
AppointmentRouter.put('/:id/respond', async (req, res) => {
  try {
    const { status, appointmentDate, remarks } = req.body;
    const doctorId = req.body.doctorId; // doctorId must be sent in body to identify who is responding

    if (!doctorId) {
      return res.status(400).json({ error: "doctorId is required in request body" });
    }

    const appointment = await Appointment.findById(req.params.id)
      .populate('patientId', 'fullName email'); // added populate to get patient email
    if (!appointment) return res.status(404).json({ error: "Appointment not found" });

    if (status === 'accepted') {
      // Set acceptedDoctorId and update status + appointmentDate
      appointment.status = 'accepted';
      appointment.acceptedDoctorId = doctorId;
      appointment.appointmentDate = appointmentDate;
      // Clear requestedDoctorIds since one doctor accepted
      appointment.requestedDoctorIds = [];
      await appointment.save();

      // ----------------- Email Sending Feature -----------------
      const nodemailer = require('nodemailer');
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: appointment.patientId.email,
        subject: 'Your Appointment Has Been Accepted',
        text: `Hello ${appointment.patientId.fullName},\n\nYour appointment request has been accepted.\nDate: ${appointmentDate}\n\nRegards,\nClinic Team`
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
        } else {
          console.log('Email sent:', info.response);
        }
      });
      // ----------------------------------------------------------

      return res.json(appointment);
    }

    if (status === 'rejected') {
      // Remove this doctor from requestedDoctorIds array
      appointment.requestedDoctorIds = appointment.requestedDoctorIds.filter(
        id => id.toString() !== doctorId
      );
      // If no doctors left, you might want to set status to 'rejected' overall
      if (appointment.requestedDoctorIds.length === 0 && !appointment.acceptedDoctorId) {
        appointment.status = 'rejected';
      }
      await appointment.save();
      return res.json(appointment);
    }
    if (status === 'completed') {
      appointment.status = 'completed';
      await appointment.save();
      return res.json({ msg: "Appointment marked as completed", appointment });
    }

    if (status === 'completed') {
      appointment.status = 'completed';
      await appointment.save();
      return res.json({ msg: "Appointment marked as completed", appointment });
    }

    return res.status(400).json({ error: "Invalid status. Use 'accepted', 'rejected', or 'completed'." });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Patient sees all their appointments
AppointmentRouter.get('/patient/:patientId', async (req, res) => {
  try {
    const status = req.query.status;  // optional filter by status

    const query = { patientId: req.params.patientId };
    if (status) query.status = status;

    let appointments = await Appointment.find(query)
      .populate('acceptedDoctorId', 'fullName speciality email');

    // For pending appointments, hide acceptedDoctorId info (null)
    appointments = appointments.map(app => {
      if (app.status === 'pending') {
        app.acceptedDoctorId = null;
      }
      return app;
    });

    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Doctor sees accepted appointments assigned to them
AppointmentRouter.get('/doctor/:doctorId/accepted', async (req, res) => {
  try {
    const appointments = await Appointment.find({
      acceptedDoctorId: req.params.doctorId,
      status: 'accepted'
    }).populate('patientId', 'fullName preferredDate email');

    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = AppointmentRouter;


//Cancel Appointment
AppointmentRouter.delete('/:id', async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id)
      .populate('patientId', 'fullName email')
      .populate('acceptedDoctorId', 'fullName email');

    if (!appointment) {
      return res.status(404).json({ error: "Appointment not found" });
    }

    // Store details before deletion (because findByIdAndDelete removes it)
    const patient = appointment.patientId;
    const doctor = appointment.acceptedDoctorId;

    await appointment.deleteOne();

    // ----------------- Email Sending Feature -----------------
    const nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    let recipientEmail, subject, body;

    if (doctor) {
      // Email patient if doctor cancels
      recipientEmail = patient.email;
      subject = 'Your Appointment Has Been Cancelled';
      body = `Hello ${patient.fullName},\n\nYour appointment with Dr. ${doctor.fullName} has been cancelled.\n\nRegards,\nClinic Team`;
    } else {
      // Email doctor if patient cancels
      recipientEmail = doctor?.email;
      subject = 'Appointment Cancelled by Patient';
      body = `Hello Dr. ${doctor?.fullName},\n\nThe patient ${patient.fullName} has cancelled their appointment.\n\nRegards,\nClinic Team`;
    }

    if (recipientEmail) {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: recipientEmail,
        subject,
        text: body
      });
    }
    // ----------------------------------------------------------

    res.json({ msg: "Appointment deleted and email sent successfully" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
