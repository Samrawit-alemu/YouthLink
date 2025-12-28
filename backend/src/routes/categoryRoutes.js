const express = require('express')
const router = express.Router()
const { createCategory, getAllCategory } = require('../controllers/categoryController.js')
const { protect, authorizeAdmin } = require('../middleware/authMiddleware')

/**
 * @openapi
 * /api/categories:
 *   post:
 *     summary: Create a new category (Admin)
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Data Science"
 *     responses:
 *       201:
 *         description: Category created
 *       500:
 *         description: Server Error
 *       401:
 *         description: Not Authorized (Token Missing/Invalid)
 */
router.post('/', protect, authorizeAdmin, createCategory)

/**
 * @openapi
 * tags:
 *   name: Categories
 *   description: Manage job categories (IT, Design, etc.)
 */

/**
 * @openapi
 * /api/categories:
 *   get:
 *     summary: Get all categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: List of categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   name:
 *                     type: string
 */
router.get('/', getAllCategory)

module.exports = router