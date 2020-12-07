const mongoose = require('mongoose');

let UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please, add a name.']
    },
    password: {
        type: String,
        required: [true, 'Please, add a password.']
    },
    isSuperAdmin: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('User', UserSchema);