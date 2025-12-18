const admin = require('../config/firebase')
const User = require('../models/User')
const user = require('../models/User')

const protect = async (req, res) => {
    let token

    if (req.headers.authorizaion && req.headers.authorizaion.startsWith('Bearer')) {
        try {
            token = req.headers.authorizaion.split(' ')[1] // remove the word Bearer

            const decodedToken = await admin.auth().verifyIdToken(token)

            req.user = await User.findOne({ firebasedUid: decodedToken.uid })

            if (!req.user) {
                return res.status(401).json({ message: 'Badge valid, but user not in DB!' })
            }
            next()
        } catch (error) {
            res.status(401).json({ message: 'Badge Invaid (Token Failed)' })
        }
    }

    if (!token) {
        res.status(401).json({ message: 'Stop! No Badge (Token) provided.' })
    }
}

module.exports = { protect }