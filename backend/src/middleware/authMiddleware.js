const admin = require('../config/firebase')
const User = require('../models/User')
const user = require('../models/User')

const protect = async (req, res, next) => {
    let token

    console.log("👉 Header Received:", req.headers.authorization);
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1] // remove the word Bearer

            const decodedToken = await admin.auth().verifyIdToken(token)

            req.user = await User.findOne({ firebaseUid: decodedToken.uid })

            if (!req.user) {
                return res.status(401).json({ message: 'Badge valid, but user not in DB!' })
            }
            next()
            return
        } catch (error) {
            console.error('Auth Error', error)
            res.status(401).json({ message: 'Badge Invaid (Token Failed)' })
        }
    }

    if (!token) {
        res.status(401).json({ message: 'Stop! No Badge (Token) provided.' })
    }
}

// Authorize Employer: specific check for role
const authorizeEmployer = (req, res, next) => {
    if (req.user && req.user.role === 'employer') {
        next()
    } else {
        res.status(403).json({ message: 'Access denied: Only Employers can do this.' })
    }

}

const authorizeAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next()
    } else {
        res.status(403).jsom({ message: 'Acess denied: admins only.' })
    }
}

module.exports = { protect, authorizeEmployer, authorizeAdmin }