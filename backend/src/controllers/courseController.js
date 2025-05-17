const Course = require('../models/Course');

exports.getCoursesByCollege = async (req, res) => {
  try {
    const courses = await Course.find({ college: req.params.collegeId });
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
