const colleges = [
  {
    name: 'Indian Institute of Technology Bombay',
    location: 'Mumbai, Maharashtra',
    type: 'Public',
    rankings: {
      national: 1,
      state: 1,
    },
    admissionInfo: {
      eligibility: 'JEE Advanced qualified, 12th pass with Physics, Chemistry, and Mathematics',
      admissionProcess: 'National level entrance via JEE Advanced and JoSAA counselling',
    },
    cost: {
      tuition: 200000,
      otherFees: 50000,
    },
    academics: {
      avgClassSize: 60,
      facultyRatio: 1/12,
      // coursesOffered will be added later after Course seeding
      coursesOffered: [],
    },
    studentLife: {
      clubs: ['Robotics Club', 'Coding Club', 'Debate Society'],
      housing: 'On-campus hostels for all students',
      events: ['Mood Indigo', 'Techfest'],
    },
    athletics: {
      teams: ['Cricket', 'Football', 'Basketball'],
      achievements: ['Inter IIT Sports Meet Champions 2023'],
    },
    graduationOutcomes: {
      employmentRate: 95,
      avgSalary: 1800000,
    },
    photos: [
      'https://example.com/images/iitb-campus.jpg',
      'https://example.com/images/iitb-hostel.jpg',
    ],
    videos: [
      'https://example.com/videos/iitb-tour.mp4',
    ],
    similarColleges: [], // Can be filled after seeding all
  },
  {
    name: 'Delhi University',
    location: 'Delhi',
    type: 'Public',
    rankings: {
      national: 10,
      state: 1,
    },
    admissionInfo: {
      eligibility: 'CUET UG qualified, 12th pass',
      admissionProcess: 'Admission based on CUET score and DU merit list',
    },
    cost: {
      tuition: 30000,
      otherFees: 10000,
    },
    academics: {
      avgClassSize: 80,
      facultyRatio: 1/25,
      coursesOffered: [],
    },
    studentLife: {
      clubs: ['Drama Club', 'Music Society', 'Entrepreneurship Cell'],
      housing: 'Limited hostel facilities; PGs widely available',
      events: ['DU Fest', 'Cultural Carnival'],
    },
    athletics: {
      teams: ['Athletics', 'Badminton'],
      achievements: ['Delhi State University Sports Winner 2022'],
    },
    graduationOutcomes: {
      employmentRate: 75,
      avgSalary: 600000,
    },
    photos: [
      'https://example.com/images/du-campus.jpg',
    ],
    videos: [
      'https://example.com/videos/du-campus-tour.mp4',
    ],
    similarColleges: [],
  },
  {
    name: 'Amity University',
    location: 'Noida, Uttar Pradesh',
    type: 'Private',
    rankings: {
      national: 30,
      state: 3,
    },
    admissionInfo: {
      eligibility: '12th pass, entrance test or direct admission',
      admissionProcess: 'Entrance exam followed by personal interview',
    },
    cost: {
      tuition: 180000,
      otherFees: 30000,
    },
    academics: {
      avgClassSize: 50,
      facultyRatio: 1/15,
      coursesOffered: [],
    },
    studentLife: {
      clubs: ['Photography Club', 'Dance Crew', 'Tech Club'],
      housing: 'Hostel and on-campus apartments available',
      events: ['Sangathan', 'Amity Youth Fest'],
    },
    athletics: {
      teams: ['Tennis', 'Volleyball'],
      achievements: ['Private University Sports League Runner-up 2023'],
    },
    graduationOutcomes: {
      employmentRate: 85,
      avgSalary: 500000,
    },
    photos: [
      'https://example.com/images/amity-campus.jpg',
    ],
    videos: [
      'https://example.com/videos/amity-virtual-tour.mp4',
    ],
    similarColleges: [],
  },
];

module.exports = colleges;
