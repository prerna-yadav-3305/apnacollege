const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String },
  type: { type: String }, // e.g. public/private
  rankings: {
    national: Number,
    state: Number
  },
  admissionInfo: {
    eligibility: String,
    admissionProcess: String
  },
  cost: {
    tuition: Number,
    otherFees: Number
  },
  academics: {
    coursesOffered: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
    avgClassSize: Number,
    facultyRatio: Number
  },
  studentLife: {
    clubs: [String],
    housing: String,
    events: [String]
  },
  athletics: {
    teams: [String],
    achievements: [String]
  },
  graduationOutcomes: {
    employmentRate: Number,
    avgSalary: Number
  },
  photos: [String],       // URLs
  videos: [String],       // URLs for virtual tours or promo videos
  similarColleges: [{ type: mongoose.Schema.Types.ObjectId, ref: 'College' }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('College', collegeSchema);
