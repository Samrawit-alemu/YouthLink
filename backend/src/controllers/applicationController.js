const Application = require('../models/Application')
const Job = require('../models/Job')


exports.applyForJob = async (req, res) => {
    try {
        const { jobId, applicantId, coverLetter, cvUrl, portfolioUrl } = req.body

        const job = await Job.findById(jobId)
        if (!job) {
            return res.status(404).json({ message: 'Job not found' })
        }
        if (!job.isOpen) {
            return res.status(400).json({ messgae: 'This job is closed' })
        }

        const alreadyApplied = await Application.findOne({ job: jobId, applicant: applicantId })
        if (alreadyApplied) {
            return res.status(400).json({ message: 'You have already applied to this job.' })
        }

        const application = await Application.create({
            job: jobId,
            applicant: applicantId,
            coverLetter,
            cvUrl,
            portfolioUrl
        })

        res.status(201).json({ success: true, data: application })
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = onrejectionhandled.values(error.errors).map(val => val.messages)
            return res.status(400).json({ success: false, message: messages.join('.') })
        }

        if (error.code === 11000) {
            return res.status(400).json({ message: 'You have already applied to this job.' })
        }
        console.error(error)
        res.status(500).json({ message: 'Server Error' })
    }
}

// applications of a specific Job ( for employers )
exports.getJobApplications = async (req, res) => {
    try {
        const applications = await Application.find({ job: req.params.jobId })
            .populate('applicant', 'name email headline skills portfolioUrl')
            .sort({ createdAt: -1 })

        res.json(applications)
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }
}

// For applicants ( job seekers )
exports.getMyApplications = async (req, res) => {
    try {
        const applications = await Application.find({ applicant: req.params.userId })
            .populate('job', 'title companyName location status')
            .sort({ createdAt: -1 })

        res.json(applications)
    } catch (error) {
        res.status(500).json({ message: 'Servor Error' })
    }
}
