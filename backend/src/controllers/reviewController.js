const Review = require('../models/Review');

exports.getReviewsByCollege = async (req, res) => {
  try {
    const reviews = await Review.find({ college: req.params.collegeId }).populate('user', 'name');
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.addReview = async (req, res) => {
  try {
    const { rating, title, content, pros, cons } = req.body;
    const user = req.user.userId;
    const college = req.params.collegeId;

    const review = new Review({ user, college, rating, title, content, pros, cons });
    await review.save();

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
