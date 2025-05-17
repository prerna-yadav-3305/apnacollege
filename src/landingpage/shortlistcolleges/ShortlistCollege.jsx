import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Box,
  Stack
} from '@mui/material';
import Footer from '../Footer';
import Navbar from '../home/Navbar';

const shortlistedColleges = [
  {
    id: 1,
    name: 'IIT Bombay',
    location: 'Mumbai, Maharashtra',
    rating: 4.8,
    courses: 'B.Tech, M.Tech, Ph.D.',
    image: 'https://source.unsplash.com/featured/?university',
  },
  {
    id: 2,
    name: 'IISc Bangalore',
    location: 'Bangalore, Karnataka',
    rating: 4.9,
    courses: 'M.Sc, M.Tech, Ph.D.',
    image: 'https://source.unsplash.com/featured/?college',
  },
  {
    id: 3,
    name: 'JNU Delhi',
    location: 'New Delhi',
    rating: 4.5,
    courses: 'BA, MA, Ph.D.',
    image: 'https://source.unsplash.com/featured/?campus',
  },
];

const ShortlistedCollege = () => {
  const handleViewDetails = (id) => {
    console.log(`View college details of ID: ${id}`);
    // navigate(`/college/${id}`); // if using react-router
  };

  const handleRemove = (id) => {
    console.log(`Remove college with ID: ${id}`);
    // implement remove logic here
  };

  return (
    <>
    <Navbar />
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        🎓 Shortlisted Colleges
      </Typography>
      <Grid container spacing={3}>
        {shortlistedColleges.map((college) => (
          <Grid item xs={12} sm={6} md={4} key={college.id}>
            <Card sx={{ borderRadius: 3, boxShadow: 3, height: '100%' }}>
              <CardMedia
                component="img"
                height="180"
                image={college.image}
                alt={college.name}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {college.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  📍 {college.location}
                </Typography>
                <Typography variant="body2" mt={1}>
                  ⭐ {college.rating} / 5
                </Typography>
                <Typography variant="body2" mt={1}>
                  🎓 Courses: {college.courses}
                </Typography>
              </CardContent>
              <Stack direction="row" spacing={2} sx={{ p: 2 }}>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => handleViewDetails(college.id)}
                >
                  View Details
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  color="error"
                  onClick={() => handleRemove(college.id)}
                >
                  Remove
                </Button>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    <Footer />
    </>
  );
};

export default ShortlistedCollege;
