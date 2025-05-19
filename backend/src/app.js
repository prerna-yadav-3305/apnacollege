require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');
const cors = require('cors');
const authRoute = require('./src/routes/authRoute');
const userRoutes = require('./src/routes/userRoute');
const collegeRoutes = require('./src/routes/collegeRoutes');
const courseRoutes = require('./src/routes/courseRoute');
const reviewRoutes = require('./src/routes/reviewRoutes');
const virtualTourRoutes = require('./src/routes/virtualTourRoute');
const comparisonRoutes = require('./src/routes/comparisionRoutes');

const app = express();
connectDB();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/users', userRoutes);
app.use('/api/colleges', collegeRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/virtualtours', virtualTourRoutes);
app.use('/api/comparisions', comparisonRoutes);

app.get('/', (req, res) => {
  res.send('Apna College Backend API is running...');
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
