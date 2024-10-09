"use strict";
const router = require('express').Router();
const { register, getProfile, setSettings } = require('../controllers/userController');
// routes/sample.js
/**
 * @swagger
 * /register:
 *   post:
 *     summary: Returns a sample message
 *     responses:
 *       201:
 *         description: A successful response
 */
router.post('/register', register);
// routes/sample.js
/**
 * @swagger
 * /profile:
 *   get:
 *     summary: Returns a sample message
 *     responses:
 *       200:
 *         description: A successful response
 */
router.get('/profile', getProfile);
// routes/sample.js
/**
 * @swagger
 * /settings:
 *   patch:
 *     summary: Returns a sample message
 *     responses:
 *       204:
 *         description: A successful response
 */
router.patch('/settings', setSettings);
module.exports = router;
