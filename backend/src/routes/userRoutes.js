const express = require('express')
const router = express.Router()
const { registerUser, updateUserProfile, getUserByEmail } = require('../controllers/userController.js')

router.post('/register', registerUser)
router.put('/profile', updateUserProfile)
router.get('/:email', getUserByEmail)

module.exports = router