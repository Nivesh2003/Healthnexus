const mongoose = require('mongoose');
userSchema = mongoose.Schema({
    "email": String,
    "password": String,
    "type": {
        type: String,
        enum: ['doctor', 'patient'],
        default: 'patient'
    }
})
const user = mongoose.model('user', userSchema);
module.exports = user;