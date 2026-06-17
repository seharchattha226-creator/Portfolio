const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  company: { type: String, required: true },
  role: { type: String, required: true },
  period: { type: String, required: true },
  description: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Experience', experienceSchema);
