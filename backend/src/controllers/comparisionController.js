const Comparison = require('../models/Comparison');

exports.getUserComparisons = async (req, res) => {
  try {
    const comparisons = await Comparison.find({ user: req.user.userId }).populate('colleges');
    res.json(comparisons);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.saveComparison = async (req, res) => {
  try {
    const { colleges } = req.body; // array of college IDs
    const user = req.user.userId;

    const newComparison = new Comparison({ user, colleges });
    await newComparison.save();

    res.status(201).json(newComparison);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
