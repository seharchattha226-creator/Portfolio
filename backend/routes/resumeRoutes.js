const express = require('express');
const router = express.Router();
const { uploadResume, getResume, upload } = require('../controllers/resumeController');
const { protect } = require('../middleware/authMiddleware');

// Public route to get resume
router.get('/', getResume);

// Private route to upload resume
router.post('/upload', protect, upload.single('resume'), uploadResume);

module.exports = router;
