const College = require('../models/College');

exports.searchColleges = async (req, res) => {
  const { query = '' } = req.query;

  const filter = {};

  if (query) {
    filter.name = { $regex: query, $options: 'i' }; // Case-insensitive search on college name
  }

  try {
    const results = await College.find(filter).limit(100);
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: 'Search failed', error: err.message });
  }
};
// collegeController.js


exports.compareColleges = async (req, res) => {
  try {
    const { collegeNames } = req.body;

    if (!collegeNames || !Array.isArray(collegeNames)) {
      return res.status(400).json({ message: 'College Names are required for comparison' });
    }

    const colleges = await College.find({ name: { $in: collegeNames } });

    // Clean up and map only relevant fields
    const formatted = colleges.map(college => ({
      id: college._id,
      name: college.name,
      rank: college.rankings?.national || '-',
      estd: college.estd || '-',
      ownership: college.type || '-',
      campusSize: college.campusSize || '-',
      facilities: {
        wifi: college.facilities.includes('Wi-Fi Campus'),
        boysHostel: college.facilities.includes('Boys Hostel'),
        girlsHostel: college.facilities.includes('Girls Hostel'),
        gym: college.facilities.includes('Gym'),
        cafeteria: college.facilities.includes('Cafeteria'),
        library: college.facilities.includes('Library'),
        medical: college.facilities.includes('Hospital/Medical'),
      },
      placement: {
        btech: college.graduation_outcomes?.average_salary || '--',
        mba: college.graduation_outcomes?.placement_rate || '--',
      },
    }));

    return res.status(200).json({ colleges: formatted });
  } catch (error) {
    console.error('Error comparing colleges:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};
// controllers/collegeController.js
exports.exploreColleges = async (req, res) => {
  const { query, type, city, ranking } = req.query;

  const filter = {};

  if (query) {
    filter.name = { $regex: query, $options: 'i' };
  }

  if (type) {
    filter.type = { $in: Array.isArray(type) ? type : [type] };
  }

  if (filters.city && filters.city.length > 0) {
  filter["location.city"] = { 
    $in: filters.city.map(city => new RegExp(`^${city.trim()}$`, 'i'))
  };
}

  if (ranking) {
    const rankRanges = Array.isArray(ranking) ? ranking : [ranking];
    const rankConditions = rankRanges.map((range) => {
      if (!range.includes('-')) return null;
      const [min, max] = range.split('-').map(Number);
      if (isNaN(min) || isNaN(max)) return null;
      return { 'rankings.national': { $gte: min, $lte: max } };
    }).filter(Boolean);

    if (rankConditions.length > 0) {
      filter.$or = rankConditions;
    }
  }

  console.log('Applied filter:', JSON.stringify(filter, null, 2)); // Debug

  try {
    const colleges = await College.find(filter).limit(100);
    res.json(colleges);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching colleges', error: error.message });
  }
};


exports.addCollege = async (req, res) => {
  try {
    const newCollege = new College(req.body);
    const savedCollege = await newCollege.save();
    res.status(201).json(savedCollege);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add college', error: error.message });
  }
};

exports.getAllColleges = async (req, res) => {
  try {
    const colleges = await College.find().limit(100);
    res.json(colleges);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getCollegeById = async (req, res) => {
  try {
    const college = await College.findById(req.params.id)
      .populate('academics.coursesOffered')
      .populate('similarColleges');

    if (!college) return res.status(404).json({ message: 'College not found' });

    res.json(college);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Add more CRUD for admin if needed
