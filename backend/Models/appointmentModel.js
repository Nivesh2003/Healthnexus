const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    speciality: String,
    bloodType: String,
    reason: String,
    idCard: String,
    status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
    acceptedDoctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
    requestedDoctorIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    appointmentDate: Date,
    createdAt: { type: Date, default: Date.now }
  });
  
  
  module.exports = mongoose.model('Appointment', appointmentSchema);