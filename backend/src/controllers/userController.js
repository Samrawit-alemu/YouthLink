const User = require('../models/User.js')

exports.registerUser = async (req, res) => {
    try {
        // 1. Get data from the request body
        const { firebaseUid, name, email } = req.body;

        // 2. Check if user already exist
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // 3. Create the new user
        const user = await User.create({
            firebaseUid,
            name,
            email
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
        const { email, role, skills, bio, companyName, location, phone } = req.body;

        // 1. find the user
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        // 2. update the common fields
        user.role = role || user.role;
        user.location = location || user.location;
        user.phone = phone || user.phone;

        // 3. update specific fields based on role
        if (role == 'jobseeker') {
            user.skills = skills || user.skills;
            user.bio = bio || user.bio;
            user.companyName = undefined;
        } else if (role == 'employer') {
            user.companyName = companyName || user.companyName;
            // clear job seeker fields
            user.skills = undefined;
            user.bio = undefined;
        }

        // 4. Save to Database
        const updatedUser = await user.save();

        res.json({
            success: true,
            data: updatedUser
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}