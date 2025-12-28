const Job = require('../models/Job')
const User = require('../models/User')

exports.createJob = async (req, res) => {
    try {
        const {
            category,
            title,
            description,
            budget,
            location
        } = req.body

        // 1.verify: is the user actually an employer?
        // const user = await User.findById(employer)
        // if (!user) {
        //     return res.status(404).json({ message: 'User not found' })
        // }
        // if (user.role != 'employer') {
        //     return res.status(403).json({ message: 'Acess Denied: Only Employers can post jobs.' })
        // }

        const employerId = req.user._id

        // 2. Create the Job
        const job = await Job.create({
            employer: employerId,
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
        const { keyword, location, category } = req.query
        // start with empty filter object
        let queryObject = {}
        // Build the filter
        // 1. Keyword Search (title or description)
        if (keyword) {
            // $or to search either title or description
            queryObject.$or = [
                { title: { $regex: keyword, $options: 'i' } }, // 'i' = case insensitive
                { description: { $regex: keyword, $options: 'i' } }
            ]
        }

        // 2. Location filter
        if (location) {
            // $regex to make partial search
            queryObject.location = { $regex: location, $options: 'i' }
        }

        // 3. Category filter (exact no partial)
        if (category) {
            queryObject.category = category
        }

        const jobs = await Job.find(queryObject)
            .populate('employer', 'name companyName email')
            .populate('category', 'name')
            .sort({ createdAt: -1 }) //newest job first
        res.json(jobs)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Server Error' })
    }
}


