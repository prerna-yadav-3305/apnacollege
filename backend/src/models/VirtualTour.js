const mongoose = require('mongoose');

const virtualTourSchema = new mongoose.Schema({
  college: { type: mongoose.Schema.Types.ObjectId, ref: 'College', required: true },
  tourType: { type: String, enum: ['360image', '360video', 'embeddedModel'] },
  url: String,
  description: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('VirtualTour', virtualTourSchema);
