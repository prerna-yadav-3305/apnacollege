import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ReviewCollegeHero() {
  const navigate = useNavigate();
  const handleReviewCollegeClick = () => {
    navigate('/review');
  };
  return (
    <Box
      sx={{
        position: 'relative',
         backgroundImage: 'url(https://th.bing.com/th/id/OIP.xEiHvcBcjm0-cvbBaI5URwHaHa?cb=iwc2&pid=ImgDet&w=184&h=184&c=7&dpr=1.3)',
        color: '#fff',
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 10 },
      }}
    >
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {/* LEFT ICON / IMAGE */}
        <Grid item xs={12} md={4} textAlign="center">
          <Box
            component="img"
            src="https://img.icons8.com/bubbles/600w/000000/review.png"
            alt="Review College Icon"
            sx={{ width: 120, height: 'auto' }}
          />
        </Grid>

        {/* RIGHT TEXT + BUTTON */}
        <Grid item xs={12} md={8}>
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{ color: 'black' }}
          >
            Review Your College 
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: 'black', mb: 3 }}
          >
            Share your genuine experience to help future students make smarter, informed choices
            about their education.. 
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: 'black', mb: 3 }}
          >
            Your insights about campus life, academics, and faculty can make a real impact.
          </Typography>
          <Button
            variant="contained" onClick={handleReviewCollegeClick}
            sx={{
              backgroundColor: '#512da8',
              color: '#fff',
              px: 4,
              py: 1.5,
              fontWeight: 'bold',
              borderRadius: '30px',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#fffff',
              },
            }}
          >
            Review College
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ReviewCollegeHero;
