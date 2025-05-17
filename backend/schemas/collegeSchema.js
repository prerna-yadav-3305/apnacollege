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
  type: { type: String, enum: ['Public', 'Private', 'Deemed', 'Autonomous'], default: 'Public' },
  location: {
    city: { type: String },
    state: { type: String },
    country: { type: String, default: 'India' },
    address: { type: String },
    pincode: { type: String }
  },
  contact: {
    phone: { type: String },
    email: { type: String },
    website: { type: String }
  },
  rankings: {
    national: { type: Number }, // National rank
    state: { type: Number },    // State rank
    global: { type: Number }    // Global rank if any
  },
  admissions: {
    eligibility: { type: String },   // Eligibility criteria summary
    entrance_exams: [String],        // List of accepted entrance exams like JEE, NEET, etc.
    application_fee: { type: Number }
  },
  courses: [CourseSchema],
  fees: {
    average_tuition_fee: { type: Number },
    hostel_fee: { type: Number }
  },
  facilities: [String],  // List like 'Library', 'Sports Complex', 'Hostel', 'Labs'
  student_life: {
    clubs: [String],
    events: [String]
  },
  athletics: {
    teams: [String], // e.g., Cricket, Basketball teams
    achievements: [String]
  },
  graduation_outcomes: {
    average_salary: { type: Number },
    placement_rate: { type: Number } // Percentage
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
