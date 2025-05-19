// routes/collegeRoutes.js (or similar)
const express = require('express');
const router = express.Router();
const { compareColleges } = require('../controllers/collegeController');

router.post('/compare', compareColleges); // POST, not GET

module.exports = router;
