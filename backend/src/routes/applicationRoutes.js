const express = require('express')
const router = express.Router()
const { applyForJob, getJobApplications, getMyApplications } = require('../controllers/applicationController')
const { protect } = require('../middleware/authMiddleware')

/**
 * @openapi
 * tags:
 *   name: Applications
 *   description: Managing job applications
 */

/**
 * @openapi
 * /api/applications:
 *   post:
 *     summary: Apply for a job
 *     tags: [Applications]
 *     security:
 *       - bearerAuth: [] 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - jobId
 *               - applicantId
 *               - coverLetter
 *               - cvUrl
 *             properties:
 *               jobId:
 *                 type: string
 *               applicantId:
 *                 type: string
 *               coverLetter:
 *                 type: string
 *                 minLength: 50
 *               cvUrl:
 *                 type: string
 *                 format: uri
 *               portfolioUrl:
 *                 type: string
 *                 format: uri
 *           example:
 *             jobId: "65b8f2a..."
 *             applicantId: "65a123..."
 *             coverLetter: "I am writing to express my strong interest in this position..."
 *             cvUrl: "https://firebasestorage.googleapis.com/..."
 *             portfolioUrl: "https://github.com/myname"
 *     responses:
 *       201:
 *         description: Application submitted
 *       400:
 *         description: Validation error or Already applied
 *       401:
 *         description: Not Authorized (Token Missing/Invalid)
 */
router.post('/', protect, applyForJob)

/**
 * @openapi
 * /api/applications/job/{jobId}:
 *   get:
 *     summary: Get all applicants for a specific Job (Employer View)
 *     tags: [Applications]
 *     security:
 *       - bearerAuth: [] 
 *     parameters:
 *       - in: path
 *         name: jobId
 *         schema:
 *           type: string
 *         required: true
 *         description: The Job ID
 *     responses:
 *       200:
 *         description: List of applicants with their profile details
 *       401:
 *         description: Not Authorized (Token Missing/Invalid)
 */
router.get('/job/:jobId', protect, getJobApplications)

/**
 * @openapi
 * /api/applications/user/{userId}:
 *   get:
 *     summary: Get application history for a Student
 *     tags: [Applications]
 *     security:
 *       - bearerAuth: [] 
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: The Student User ID
 *     responses:
 *       200:
 *         description: List of applications with job details
 *       401:
 *         description: Not Authorized (Token Missing/Invalid)
 */
router.get('/user/:userId', protect, getMyApplications)

module.exports = router