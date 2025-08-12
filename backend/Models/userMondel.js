const mongoose = require('mongoose');
userSchema = mongoose.Schema({
    "fullName": String,
    "dob": Date,
    "mobile": String,
    "email": {
     type:String,
     unique:true,
     required:true
    },
    "gender": String,
    "password": String,
    "type": {
        type: String,
        enum: ['doctor', 'patient'],
        default: 'patient'
    },
    "speciality": {
        type: String,
        default: null
    }
});
const User = mongoose.model('User', userSchema);
module.exports = User;