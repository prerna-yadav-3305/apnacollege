import React from 'react';
import { Button,  Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const ApplyCounsellingSection = () => {
  const navigate = useNavigate();
    const handleCounsellingClick = () => {
      navigate('/counselling');
    };
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: 'url(https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        py: 12,
        px: 2,
        textAlign: 'center',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          p: { xs: 4, md: 6 },
          borderRadius: 4,
          boxShadow: 5,
          maxWidth: 600,
          width: '100%',
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          fontWeight="bold"
          gutterBottom
          sx={{ color: 'white' }}
        >
          Apply for Counselling
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, color: 'grey.300' }}>
          Get personalized guidance and secure your seat in the college and branch of your choice.
        </Typography>
        <Button
          variant="contained"
          onClick={handleCounsellingClick}
          size="large"
          sx={{
            px: 5,
            py: 1.5,
            fontWeight: 'bold',
            fontSize: '1rem',
            borderRadius: 3,
            background: 'linear-gradient(to right, #43a047, #66bb6a)',
            color: 'white',
            textTransform: 'none',
            '&:hover': {
              background: 'linear-gradient(to right, #388e3c, #4caf50)',
            },
          }}
        >
          Apply Now
        </Button>
      </Box>
    </Box>
  );
};

export default ApplyCounsellingSection;
