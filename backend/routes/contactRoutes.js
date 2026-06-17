const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { saveContact, getAllMessages } = require('../controllers/contactController');

/**
 * Route: POST /api/contact
 * Desc: Save contact form submission with validation
 */
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('subject', 'Subject is required').not().isEmpty(),
    check('message', 'Message is required').not().isEmpty(),
  ],
  saveContact
);

/**
 * Route: GET /api/contact
 * Desc: Get all messages
 */
router.get('/', getAllMessages);

module.exports = router;
