const mongoose = require('mongoose');


const TestSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        index: true,
        trim: true
    },
    phone_number: {
        type: String,
        required: true
    }
}, {
        timestamps: true

    });

module.exports = mongoose.model('Test', TestSchema);