const User = require('../models/User.js')

exports.registerUser = async (req, res) => {
    try {
        // 1. Get data from the request body
        const { firebaseUid, name, email, role } = req.body;

        // 2. Check if user already exist
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // 3. Create the new user
        const user = await User.create({
            firebaseUid,
            name,
            email,
            role
        })

        res.status(201).json({
            success: true,
            data: user
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Server Error' })
    }
}

exports.updateUserProfile = async (req, res) => {
    try {
        // identify user by email
        const { email, headline, education, skills, bio, socialLinks, companyName, companySize, location, phone, portfolioUrl } = req.body;

        // 1. find the user
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        // 2. update the common fields
        user.location = location || user.location;
        user.phone = phone || user.phone;
        user.bio = bio || user.bio; // personal bio or company desription

        if (socialLinks) {
            user.socialLinks = { ...user.socialLinks, ...socialLinks }
        }
        // 3. update specific fields based on role
        if (user.role == 'jobseeker') {
            user.headline = headline || user.headline;
            user.skills = skills || user.skills;

            if (education) user.education = education;
            user.companyName = undefined;
            user.companySize = undefined;
            user.portfolioUrl = portfolioUrl || user.portfolioUrl
        } else if (user.role == 'employer') {
            user.companyName = companyName || user.companyName;
            user.companySize = companySize || user.companySize;
            // clear job seeker fields
            user.skills = undefined;
            user.portfolioUrl = undefined;
            user.education = undefined;
            user.headline = undefined;
        }

        // 4. Save to Database
        const updatedUser = await user.save();

        res.json({
            success: true,
            data: updatedUser
        });

    } catch (error) {
        console.error(error);
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message)
            return res.status(400).json({ success: false, message: messages.join(',') })
        }
        res.status(500).json({ message: 'Server Error' });
    }
}

exports.getUserByEmail = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.params.email })

        if (!user) {
            return res.status(404).json({ message: 'User not found ' })
        }

        res.json(user)
    } catch {
        console.error(error)
        res.status(500).json({ message: 'Server Error' })
    }
}