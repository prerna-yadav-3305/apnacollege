import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
} from '@mui/material';
import { useNavigate } from "react-router-dom";

const features = [
  { title: 'Fees', description: 'Filter colleges by annual or total fees.' },
  { title: 'City & State', description: 'Choose preferred location for studies.' },
  { title: 'Degree', description: 'Select UG,PG or diploma courses.' },
  { title: 'Entrance Exam', description: 'Sort colleges based on entrance test scores.' },
  { title: 'Branch', description: 'Select the branch of your program.' },
  { title: 'Ownership', description: 'Government, private, or public universities.' },
];

function Explore() {
   const navigate = useNavigate();
    function handleExploreClick() {
    navigate("/explore");
  }
  return (
    <Box sx={{ py: 10, px: { xs: 3, md: 10 }, backgroundColor: '#f9f9f9' }}>
      <Grid container spacing={6} alignItems="center">
        {/* LEFT COMPRESSED SECTION */}
        <Grid item xs={12} md={6}>
          <Box sx={{ maxWidth: 600 }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Explore Colleges
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Discover the best colleges tailored to your preferences. Use various filters like fees,
              city, state, degree, entrance exams, branch, ownership, and more to narrow down your
              choices and make the best decision for your future.
            </Typography>

            <Typography variant="h6" fontWeight="bold" mt={4} mb={2}>
              Explore by Features
            </Typography>

            <Grid container spacing={4}> {/* Adjusted spacing for cards */}
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} key={index}> {/* 2 cards per row on small and above */}
                  <Card
                    sx={{
                      borderRadius: 3,
                      boxShadow: 1,
                      transition: 'transform 0.2s ease',
                      height: '100%',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: 3,
                      },
                    }}
                  >
                    <CardContent>
                      <Typography variant="subtitle1" fontWeight={600}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Button
              variant="contained" onClick={handleExploreClick}
              sx={{
                mt: 4,
                borderRadius: 2,
                px: 4,
                py: 1.5,
                backgroundColor: '#4caf50',
                textTransform: 'none',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#155ab6',
                },
              }}
            >
              Explore Colleges
            </Button>
          </Box>
        </Grid>

        {/* RIGHT IMAGE SECTION */}
        <Grid item xs={12} md={6} sx={{ height: '400%' }}> {/* Ensure the Grid item takes full height */}
          <Box
            component="img"
            src="https://th.bing.com/th/id/OIP.nKN34Rej5WxuVJzwfeY3_wHaEK?cb=iwc2&rs=1&pid=ImgDetMain"
            alt="Explore Colleges"
            sx={{
              width: '200%',
              height: '400%',  // Ensure the image takes up the full height of the container
              objectFit: 'cover', // This ensures the image scales properly
              borderRadius: 4,
              boxShadow: 3,
              display: 'block',
              mx: 'auto',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Explore;
