const Resume = require('../models/Resume');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// File filter: allow PDFs and HTML
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'application/pdf' || file.mimetype === 'text/html') {
    cb(null, true);
  } else {
    cb(new Error('Only PDF or HTML files are allowed!'), false);
  }
};

// Multer upload instance
const upload = multer({ storage: storage, fileFilter: fileFilter });

// Function to check for local PDF or HTML file in uploads folder
const getLocalResume = () => {
  const uploadsDir = path.join(__dirname, '../uploads');
  try {
    const files = fs.readdirSync(uploadsDir);
    const resumeFiles = files.filter(file => file.endsWith('.pdf') || file.endsWith('.html'));
    if (resumeFiles.length > 0) {
      return {
        url: `/uploads/${resumeFiles[0]}`,
        filename: resumeFiles[0]
      };
    }
  } catch (error) {
    console.error('Error reading uploads folder:', error);
  }
  return null;
};

// Mock resume data (for fallback)
const mockResume = {
  url: 'https://example.com/resume.pdf',
  filename: 'sehar-fiaz-resume.pdf'
};

/**
 * @desc    Upload resume
 * @route   POST /api/resume/upload
 * @access  Private
 */
const uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file uploaded!' });
    }

    // Delete existing resume if any
    await Resume.deleteMany({});

    // Create new resume entry
    const resume = await Resume.create({
      url: `/uploads/${req.file.filename}`,
      filename: req.file.filename
    });

    res.status(201).json({
      success: true,
      message: 'Resume uploaded successfully!',
      data: resume
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error!' });
  }
};

/**
 * @desc    Get resume
 * @route   GET /api/resume
 * @access  Public
 */
const getResume = async (req, res) => {
  try {
    // First check for local PDF file
    const localResume = getLocalResume();
    if (localResume) {
      return res.status(200).json({
        success: true,
        data: localResume
      });
    }

    const resume = await Resume.findOne().sort({ createdAt: -1 });
    
    // Use mock resume if no database connection or no resume found
    if (!resume) {
      return res.status(200).json({
        success: true,
        data: mockResume
      });
    }

    res.status(200).json({
      success: true,
      data: resume
    });
  } catch (error) {
    console.error(error);
    // First try local resume if available
    const localResume = getLocalResume();
    if (localResume) {
      return res.status(200).json({
        success: true,
        data: localResume
      });
    }
    // If database error and no local resume, return mock resume
    res.status(200).json({
      success: true,
      data: mockResume
    });
  }
};

module.exports = {
  uploadResume,
  getResume,
  upload
};
