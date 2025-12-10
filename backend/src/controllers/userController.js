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