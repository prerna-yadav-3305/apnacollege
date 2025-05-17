const express = require('express');
const router = express.Router();
const virtualTourController = require('../controllers/virtualTourController');

router.get('/college/:collegeId', virtualTourController.getToursByCollege);

module.exports = router;
