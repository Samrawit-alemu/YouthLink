const express = require('express')
const router = express.Router()
const { applyForJob, getJobApplications, getMyApplications } = require('../controllers/applicationController')

router.post('/', applyForJob)
router.get('/job/:jobId', getJobApplications)
router.get('/user/:userId', getMyApplications)

module.exports = router