const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  user: { type: String, required: true },          // user ID or name
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String },
  date: { type: Date, default: Date.now }
});

const CourseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  degree: { type: String }, // e.g., B.Tech, MBA, M.Sc.
  duration: { type: String }, // e.g., 4 years, 2 years
  fees: { type: Number }
});

const VirtualTourSchema = new mongoose.Schema({
  title: { type: String },
  url: { type: String }, // link to virtual tour (could be 360 tour link or embed)
});

const CollegeSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },

  type: {
    type: String,
    enum: ['Public', 'Private', 'Deemed', 'Autonomous'],
    default: 'Public'
  },

  estd: { type: String }, // e.g., "1998"
  ownership: { type: String }, // e.g., "Public/Government"
  campusSize: { type: String }, // e.g., "300 acres"

  location: {
    city: String,
    state: String,
    country: { type: String, default: 'India' },
    address: String,
    pincode: String
  },

  contact: {
    phone: String,
    email: String,
    website: String
  },

  rankings: {
    national: Number,
    state: Number,
    global: Number,
    rank: Number // Direct rank if needed separately
  },

  admissions: {
    eligibility: String,
    entrance_exams: [String],
    application_fee: Number
  },

  courses: [CourseSchema],

  fees: {
    average_tuition_fee: Number,
    hostel_fee: Number
  },

  placement: {
    btech: String,
    mba: String
  },

  facilities: {
    wifi: { type: Boolean, default: false },
    hostel: { type: Boolean, default: false },
    gym: { type: Boolean, default: false },
    cafeteria: { type: Boolean, default: false },
    library: { type: Boolean, default: false },
    medical: { type: Boolean, default: false },
    boys_hostel: { type: Boolean, default: false },
    girls_hostel: { type: Boolean, default: false },
    // Add more facilities as needed
  },

  student_life: {
    clubs: [String],
    events: [String]
  },

  athletics: {
    teams: [String],
    achievements: [String]
  },

  graduation_outcomes: {
    average_salary: Number,
    placement_rate: Number // %
  },

  virtual_tours: [VirtualTourSchema],
  reviews: [ReviewSchema],

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Middleware to update updatedAt on save
CollegeSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const College = mongoose.model('College', CollegeSchema);

module.exports = College;
