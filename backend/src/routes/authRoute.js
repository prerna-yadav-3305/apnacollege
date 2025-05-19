const express = require('express');
const router = express.Router();
const { signupUser, loginUser } = require('../controllers/authController');
const { signupValidation, loginValidation, validate } = require('../middleware/validators');

router.post('/signup', signupValidation, validate, signupUser);
router.post('/login', loginValidation, validate, loginUser);

module.exports = router;
