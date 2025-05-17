const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

router.get('/college/:collegeId', courseController.getCoursesByCollege);

module.exports = router;
