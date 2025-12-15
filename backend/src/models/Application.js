const mongoose = require('mongoose')

const ApplicationSchema = new mongoose.Schema({
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true
    },

    applicant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    coverLetter: {
        type: String,
        required: true,
        minlength: [50, 'Your cover letter is too short. Please write at least 50 characters.'],
        maxlength: [2000, 'Your cover letter is too long. Please keep it under 2000 characters.']
    },

    status: {
        type: String,
        enum: ['pending', 'viewed', 'accepted', 'rejected'],
        default: 'pending'
    },

    cvUrl: {
        type: String,
        required: true
    },

    portfolioUrl: {
        type: String
    }
}, { timestamps: true })

// prevent duplicates
ApplicationSchema.index({ job: 1, applicant: 1 }, { unique: true })

module.exports = mongoose.model('Application', ApplicationSchema)