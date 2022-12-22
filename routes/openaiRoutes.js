// Imports
const express = require('express');
const { generateImage } = require('../controllers/openAiController');

// Get router
const router = express.Router();

// Post: Generate image
router.post('/generateimage', generateImage);

// Export
module.exports = router;