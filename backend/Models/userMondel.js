const mongoose = require('mongoose');
userSchema = mongoose.Schema({
    "fullName": String,
    "dob": Date,
    "mobile": String,
    "email": String,
    "gender": String,
    "password": String,
    "type": {
        type: String,
        enum: ['doctor', 'patient'],
        default: 'patient'
    }
});
const user = mongoose.model('user', userSchema);
module.exports = user;