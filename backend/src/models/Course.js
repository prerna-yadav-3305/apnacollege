const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  eligibility: String,
  fees: Number,
  duration: String,
  college: { type: mongoose.Schema.Types.ObjectId, ref: 'College' }
});

module.exports = mongoose.model('Course', courseSchema);
