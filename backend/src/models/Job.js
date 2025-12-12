const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    employer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true,
        ref: 'Category'
    },

    budget: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    isOpen: {
        type: String,
        default: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Job', JobSchema)