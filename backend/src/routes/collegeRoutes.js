const express = require('express');
const router = express.Router();
const collegeController = require('../controllers/collegeController');
const College = require('../models/College'); 

router.get('/search', collegeController.searchColleges); // ✅ fixed line;
router.get('/explore', collegeController.exploreColleges);
router.post('/compare', async (req, res) => {
  try {
    const { collegeNames } = req.body;

    if (!collegeNames || !Array.isArray(collegeNames)) {
      return res.status(400).json({ error: 'collegeNames array is required' });
    }

    const colleges = await College.find({ name: { $in: collegeNames } });
    res.json(colleges);
  } catch (error) {
    console.error("Error in compare API:", error);
    res.status(500).json({ error: "Server Error" });
  }
});
module.exports = router;
