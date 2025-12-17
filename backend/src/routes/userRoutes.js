const express = require('express')
const router = express.Router()
const { registerUser, updateUserProfile, getUserByEmail } = require('../controllers/userController.js')
const { protect } = require('../middleware/authMiddleware.js')

/**
 * @openapi
 * /api/users/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - firebaseUid
 *               - role
 *             properties:
 *               name:
 *                 type: string
 *                 example: Abebe Bikila
 *               email:
 *                 type: string
 *                 example: abebe@example.com
 *               firebaseUid:
 *                 type: string
 *                 example: uid-12345
 *               role:
 *                 type: string
 *                 enum: [jobseeker, employer]
 *                 example: jobseeker
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: User already exists
 *       500:
 *         description: Server Error
 */
router.post('/register', registerUser)

/**
 * @openapi
 * /api/users/profile:
 *   put:
 *     summary: Update User Profile (Onboarding & Editing)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: [] 
 *     description: Update profile fields. The fields accepted depend on the user's role (Job Seeker vs Employer).
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Used to identify the user
 *               location:
 *                 type: string
 *               phone:
 *                 type: string
 *               bio:
 *                 type: string
 *               socialLinks:
 *                 type: object
 *                 properties:
 *                   linkedin:
 *                     type: string
 *                   github:
 *                     type: string
 *                   website:
 *                     type: string
 *               # Job Seeker Fields
 *               headline:
 *                 type: string
 *               skills:
 *                 type: array
 *                 items:
 *                   type: string
 *               portfolioUrl:
 *                 type: string
 *               education:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     institution:
 *                       type: string
 *                     degree:
 *                       type: string
 *                     year:
 *                       type: string
 *               experience:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                     company:
 *                       type: string
 *                     description:
 *                       type: string
 *               # Employer Fields
 *               companyName:
 *                 type: string
 *               companySize:
 *                 type: string
 *           example:
 *             email: "dawit@example.com"
 *             location: "Addis Ababa"
 *             phone: "0911223344"
 *             bio: "Passionate developer."
 *             headline: "Full Stack Developer"
 *             skills: ["React", "Node.js"]
 *             socialLinks:
 *               linkedin: "https://linkedin.com/in/dawit"
 *               github: "https://github.com/dawit"
 *             education:
 *               - institution: "AAU"
 *                 degree: "SE"
 *                 year: "2024"
 *     responses:
 *       200:
 *         description: Profile updated successfully
 *       400:
 *         description: Validation error
 *       404:
 *         description: User not found
 *       401:
 *         description: Not Authorized (Token Missing/Invalid)
 */
router.put('/profile', protect, updateUserProfile)

/**
 * @openapi
 * /api/users/{email}:
 *   get:
 *     summary: Get User Profile by Email
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: email
 *         schema:
 *           type: string
 *         required: true
 *         description: The user's email address
 *     responses:
 *       200:
 *         description: User profile details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 role:
 *                   type: string
 *                 bio:
 *                   type: string
 *       404:
 *         description: User not found
 */
router.get('/:email', getUserByEmail)

module.exports = router
