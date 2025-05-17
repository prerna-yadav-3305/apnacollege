const express = require('express');
const router = express.Router();
const comparisonController = require('../controllers/comparisonController');
const auth = require('../middleware/authMiddleware');

router.get('/', auth, comparisonController.getUserComparisons);
router.post('/', auth, comparisonController.saveComparison);

module.exports = router;
