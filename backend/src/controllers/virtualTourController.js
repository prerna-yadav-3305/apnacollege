const VirtualTour = require('../models/VirtualTour');

exports.getToursByCollege = async (req, res) => {
  try {
    const tours = await VirtualTour.find({ college: req.params.collegeId });
    res.json(tours);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
