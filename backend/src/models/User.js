const mongoose = require('mongoose')
const validator = require('validator')

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
        unique: true,
        lowecase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    role: {
        type: String,
        enum: ['jobseeker', 'employer', 'admin'],
        required: true
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
        type: String,
        validate: {
            validator: function (v) {
                if (!v) return true
                return validator.isURL(v)
            },
            message: 'Please provide a valid URL'
        }
    },
    // 4. Employer fields
    companyName: {
        type: String
    },
    companySize: { type: String },
    location: {
        type: String
    },
    phone: {
        type: String,
        // required: true,
        validate: function (v) {
            return /^(\+251|0)(9|7)[0-9]{8}$/.test(v)
        },
        message: props => `${props.value} is not a valid Ethiopian phone number!`
    },
    socialLinks: {
        linkedin: { type: String },
        github: { type: String },
        website: { type: String }
    },
    headline: { type: String },
    education: [{ institution: String, degree: String, year: String }],
    adminReview: {
        isVerified: { type: Boolean, default: false },
        rating: { type: Number, min: 1, max: 5 },
        feedback: { type: String }
    }
}, { timestamps: true }) // Automatically adds 'createdAt' and 'updatedAt'

module.exports = mongoose.model('User', UserSchema)