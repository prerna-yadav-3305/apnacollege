const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const collegeController = require('../controllers/collegeController'); // ✅

const auth = require('../middleware/authMiddleware');
const adminOnly = require('../middleware/adminMiddleware');
const { body } = require('express-validator');
const validate = require('../middleware/validators');

router.post(
  '/signup',
  [
    body('name').notEmpty(),
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
  ],
  validate,
  userController.signup
);

router.post('/login', userController.login);
router.get('/profile', auth, userController.getProfile);

// ✅ This should now work fine
router.post('/college', auth, adminOnly, collegeController.addCollege);

module.exports = router;
