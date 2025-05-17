require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');

const app = express();
connectDB();

app.use(express.json());

// Routes
app.use('/api/users',require('./src/routes/userRoute'));

app.use('/api/colleges', require('./src/routes/collegeRoutes'));
app.use('/api/courses', require('./src/routes/courseRoute'));
app.use('/api/reviews', require('./src/routes/reviewRoutes'));
app.use('/api/virtualtours', require('./src/routes/virtualTourRoute'));
app.use('/api/comparisons', require('./src/routes/comparisonRoutes'));

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
