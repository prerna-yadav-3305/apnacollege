import React from 'react';
import { Box, Typography, Card,  Grid,CardMedia, CardContent, Button, Chip, Stack } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';

const ShortlistedColleges = () => {
   const navigate = useNavigate();
    const handleShortlistClick = () => {
      navigate('/shortlist');
    };
  return (
    
    <Box
           sx={{
    borderRadius: 4,
    boxShadow: 6,
    p: 4,
    backgroundcolor: '#D8BFD8',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
  }}
>
      {/* Text aligned to the left */}
      <Box sx={{ maxWidth: "#6a1b9a", textAlign: "left" }}>
        <Typography variant="h4" gutterBottom color="#6a1b9a" fontWeight={700}>
          Shortlist colleges
        </Typography>
        <Box/>
        <Typography
            variant="body1"
            sx={{ color: 'black', mb: 3 }}
          >
          Easily Track Your Top Choices With the Shortlisted Colleges feature, you can bookmark <Box/> your favorite institutions as you explore. This helps you stay organized and compare <Box/>campuses, programs, and opportunities later—without having to search all over again.
        </Typography>
<Typography
            variant="body1"
            sx={{ color: 'black', mb: 3 }}
          >
          Found a college you love? <Box/>Tap the ⭐ to shortlist it! <Box/><Box/> 👜 Quickly access your saved colleges anytime<Box/>📊 Compare them side by side.
        </Typography>
      </Box>

      {/* Button aligned left with margin-top */}
      <Box sx={{ mt: 3 }}>
        <Button
                variant="contained"
                onClick={handleShortlistClick}
                size="large"
                sx={{
                  backgroundColor: '#4a148c',
                  borderRadius: '30px',
                  px: 5,
                  py: 1.5,
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: '#6a1b9a',
                  },
                }}
              
          >VIEW SHORTLISTED COLLEGES</Button>
      </Box>
<Grid item xs={12} md={6} sx={{ height: '400%' }}>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} justifyContent="right">
        {/* College Card 1 */}
        <Card sx={{ width: 300, position: 'relative', borderRadius: 3, boxShadow: 3 }}>
          <CardMedia
            component="img"
            height="180"
            image="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your image path
            alt="College 1"
          />
          <Chip
            icon={<StarIcon />}
            label="Shortlisted"
            color="secondary"
            sx={{ position: 'absolute', top: 16, right: 16 }}
          />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Greenfield Institute of Technology
            </Typography>
            <Typography variant="body2" color="text.secondary">
              🌿 Eco-friendly campus • 💼 Top placements • 🏛️ Modern infrastructure
            </Typography>
          </CardContent>
        </Card>

        {/* College Card 2 */}
        <Card sx={{ width: 300, position: 'relative', borderRadius: 3, boxShadow: 3 }}>
          <CardMedia
            component="img"
            height="180"
            image="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your image path
            alt="College 2"
          />
          <Chip
            icon={<StarIcon />}
            label="Shortlisted"
            color="secondary"
            sx={{ position: 'absolute', top: 16, right: 16 }}
          />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Horizon National University
            </Typography>
            <Typography variant="body2" color="text.secondary">
              📚 World-class faculty • 🧑‍🔬 Research-driven • 🌐 Global exposure
            </Typography>
          </CardContent>
        </Card>
      </Stack>
      </Grid>
    </Box>
    
  );
}

   

export default ShortlistedColleges;
