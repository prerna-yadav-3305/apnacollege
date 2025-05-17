const College = require('../models/College');
exports.addCollege = async (req, res) => {
  try {
    const newCollege = new College(req.body);
    const savedCollege = await newCollege.save();
    res.status(201).json(savedCollege);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add college', error: error.message });
  }
};

exports.getAllColleges = async (req, res) => {
  try {
    const colleges = await College.find().limit(100);
    res.json(colleges);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getCollegeById = async (req, res) => {
  try {
    const college = await College.findById(req.params.id)
      .populate('academics.coursesOffered')
      .populate('similarColleges');

    if (!college) return res.status(404).json({ message: 'College not found' });

    res.json(college);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Add more CRUD for admin if needed
