const mongoose = require('mongoose');

/**
 * Contact Schema for storing portfolio contact form submissions.
 * Stores in the 'contacts' collection within the 'portfolio' database.
 */
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ]
  },
  subject: {
    type: String,
    required: [true, 'Please add a subject'],
    trim: true
  },
  message: {
    type: String,
    required: [true, 'Please add a message'],
    trim: true
  }
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
  collection: 'contacts' // Explicitly set collection name
});

module.exports = mongoose.model('Contact', contactSchema);
