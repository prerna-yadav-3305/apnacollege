const express = require('express');
const router = express.Router();
const collegeController = require('../controllers/collegeController');

router.get('/', collegeController.getAllColleges);
router.get('/:id', collegeController.getCollegeById);

module.exports = router;
