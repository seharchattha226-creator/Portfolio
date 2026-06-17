const Contact = require('../models/Contact');
const { validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');

/**
 * @desc    Save contact form submission
 * @route   POST /api/contact
 * @access  Public
 */
exports.saveContact = async (req, res) => {
  console.log('Received request to /api/contact:', req.body);
  try {
    // Check for validation errors from express-validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('Validation errors:', errors.array());
      return res.status(400).json({ 
        success: false,
        errors: errors.array() 
      });
    }

    const { name, email, subject, message } = req.body;

    let contact;
    const isDbConnected = mongoose.connection.readyState === 1;
    console.log('DB connected:', isDbConnected);

    if (isDbConnected) {
      // Create new contact entry in database
      contact = await Contact.create({
        name,
        email,
        subject,
        message
      });
    } else {
      // If database is not connected, still process the message
      contact = { name, email, subject, message, _id: 'fallback-id' };
    }

    // Send email notification
    try {
      console.log('Attempting to send email notification...');
      console.log('EMAIL_USER:', process.env.EMAIL_USER);
      console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '***' : 'NOT SET');
      
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      // Verify transporter
      await transporter.verify();
      console.log('Transporter verified successfully');

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `New Contact Form Submission: ${subject}`,
        html: `
          <h2>New Message from Portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `
      };

      const info = await transporter.sendMail(mailOptions);
      console.log('Email notification sent successfully:', info.messageId);
    } catch (emailError) {
      console.error('Error sending email notification:', emailError);
      console.error('Email error details:', emailError.message, emailError.stack);
      // Don't fail the whole request if email fails
    }

    console.log('Sending success response');
    res.status(201).json({
      success: true,
      message: 'Message sent successfully!',
      data: contact
    });
  } catch (error) {
    console.error(`Error in saveContact:`, error);
    res.status(500).json({
      success: false,
      message: 'Server error, please try again later.'
    });
  }
};

/**
 * @desc    Get all contact messages (for admin)
 * @route   GET /api/contact
 * @access  Private (Assume admin middleware handles security)
 */
exports.getAllMessages = async (req, res) => {
  try {
    const isDbConnected = mongoose.connection.readyState === 1;
    let messages = [];

    if (isDbConnected) {
      messages = await Contact.find().sort({ createdAt: -1 });
    }

    res.status(200).json({
      success: true,
      count: messages.length,
      data: messages
    });
  } catch (error) {
    console.error(`Error in getAllMessages: ${error.message}`);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};
