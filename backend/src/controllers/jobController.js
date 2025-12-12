const Job = require('../models/Job')
const User = require('../models/User')

exports.createJob = async (req, res) => {
    try {
        const {
            employer,
            category,
            title,
            description,
            budget,
            location
        } = req.body

        // 1.verify: is the user actually an employer?
        const user = await User.findById(employer)
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }
        if (user.role != 'employer') {
            return res.status(403).json({ message: 'Acess Denied: Only Employers can post jobs.' })
        }

        // 2. Create the Job
        const job = await Job.create({
            employer,
            category,
            title,
            description,
            budget,
            location
        })

        res.status(201).json({
            success: true,
            data: job
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' })
    }
}

exports.getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find()
            .populate('employer', 'name companyName email')
            .populate('category', 'name')
        res.json(jobs)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Server Error' })
    }
}


