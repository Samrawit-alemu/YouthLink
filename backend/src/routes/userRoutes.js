const express = require('express')
const router = express.Router()
const { registerUser, updateUserProfile } = require('../controllers/userController.js')

router.post('/register', registerUser)
router.put('/profile', updateUserProfile)

module.exports = router