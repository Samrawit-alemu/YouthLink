const express = require('express')
const router = express.Router()
const { createJob, getAllJobs } = require('../controllers/jobController')
const { protect } = require('../middleware/authMiddleware')

/**
 * @openapi
 * tags:
 *   name: Jobs
 *   description: Posting and fetching gigs
 */


/**
 * @openapi
 * /api/jobs:
 *   post:
 *     summary: Post a new Job (Employer Only)
 *     tags: [Jobs]
 *     security:
 *       - bearerAuth: [] 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - employer
 *               - category
 *               - title
 *               - description
 *               - budget
 *               - location
 *             properties:
 *               employer:
 *                 type: string
 *                 description: User ID of the employer
 *               category:
 *                 type: string
 *                 description: Category ID
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               budget:
 *                 type: string
 *               location:
 *                 type: string
 *           example:
 *             employer: "65b12345..."
 *             category: "65b98765..."
 *             title: "Need a React Website"
 *             description: "Looking for a student to build a portfolio site."
 *             budget: "5000 ETB"
 *             location: "Addis Ababa"
 *     responses:
 *       201:
 *         description: Job posted successfully
 *       403:
 *         description: Access Denied (Not an employer)
 *       404:
 *         description: User not found
 *       401:
 *         description: Not Authorized (Token Missing/Invalid)
 */
router.post('/', protect, createJob)

/**
 * @openapi
 * /api/jobs:
 *   get:
 *     summary: Get all jobs
 *     tags: [Jobs]
 *     description: Returns a list of jobs with Employer and Category details populated.
 *     responses:
 *       200:
 *         description: List of jobs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   title:
 *                     type: string
 *                   employer:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                       companyName:
 *                         type: string
 */
router.get('/', getAllJobs)

module.exports = router;