const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    // 1. The link to Firebase
    firebaseUid: {
        type: String,
        required: true,
        uniqur: true
    },
    email: {
        type: String,
        required: true,
        uniqur: true
    },
    role: {
        type: String,
        enum: ['jobseeker', 'employer', 'pending'],
        default: 'pending'
    },
    // 2. common profile info
    name: {
        type: String,
        required: true
    },
    // 3. Job seeker fields
    skills: {
        type: [String],
        default: []
    },
    bio: {
        type: String
    },
    portfolioUrl: {
        type: String
    },
    // 4. Employer fields
    companyName: {
        type: String
    },
    location: {
        type: String
    },
    phone: {
        type: String
    }
}, { timestamps: true }) // Automatically adds 'createdAt' and 'updatedAt'

module.exports = mongoose.model('User', UserSchema)