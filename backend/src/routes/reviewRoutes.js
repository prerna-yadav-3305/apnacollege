const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const auth = require('../middleware/authMiddleware');

router.get('/college/:collegeId', reviewController.getReviewsByCollege);
router.post('/college/:collegeId', auth, reviewController.addReview);

module.exports = router;
