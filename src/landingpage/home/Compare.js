import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  TextField,
  MenuItem
} from '@mui/material';
import { useNavigate } from "react-router-dom";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import DomainIcon from '@mui/icons-material/Domain';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EngineeringIcon from '@mui/icons-material/Engineering';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GavelIcon from '@mui/icons-material/Gavel';
import PublicIcon from '@mui/icons-material/Public';
import BookIcon from '@mui/icons-material/Book';
import ReviewsIcon from '@mui/icons-material/Reviews';
import InfoIcon from '@mui/icons-material/Info';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SchoolIcon from '@mui/icons-material/School';

const features = [
  { icon: <EmojiEventsIcon />, label: 'College Rankings' },
  { icon: <DomainIcon />, label: 'Placement Records' },
  { icon: <LocationOnIcon />, label: 'Distance from You' },
  { icon: <EngineeringIcon />, label: 'Infrastructure' },
  { icon: <CheckCircleIcon />, label: 'Attendance Criteria' },
  { icon: <GavelIcon />, label: 'Discipline' },
  { icon: <PublicIcon />, label: 'Ownership' },
  { icon: <BookIcon />, label: 'Courses Offered' },
  { icon: <ReviewsIcon />, label: 'Student Reviews' },
  { icon: <InfoIcon />, label: 'College Details' },
  { icon: <ApartmentIcon />, label: 'College Facilities' },
  { icon: <AssessmentIcon />, label: 'Exam Cutoffs' },
  { icon: <SchoolIcon />, label: 'Course Details' },
];

const colleges = [
  'IIT Bombay',
  'IIT Delhi',
  'IIT Madras',
  'BITS Pilani',
  'NIT Trichy',
  'VIT Vellore'
];

function Compare() {
  const navigate = useNavigate();

  const handleCompareClick = () => {
    navigate("/compare");
  };
  const [college1, setCollege1] = React.useState('');
  const [college2, setCollege2] = React.useState('');

  return (
    <Box sx={{ py: 6, px: 3, backgroundColor: '#fafafa' }}>
      <Grid container spacing={4} justifyContent="center">
        {/* Foreground College Image */}
    
        {/* Main Compare Card */}
        <Grid item xs={12} md={10}>
         <Card
  sx={{
    borderRadius: 4,
    boxShadow: 20,
    p: 4,
    backgroundImage: `url('https://th.bing.com/th/id/OIP.KWnV43eEWAwTQgbWAbQ2vwHaGL?w=225&h=188&c=7&r=0&o=5&cb=iwc2&dpr=1.3&pid=1.7g')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
  }}
>
  {/* Optional: Overlay to darken background for better readability */}
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(233, 214, 214, 0.5)', // semi-transparent black
      zIndex: 1,
    }}
  />

  {/* Card Content over image */}
  <CardContent sx={{ position: 'relative', zIndex: 2 }}>
    <Typography variant="h4" color="black" fontWeight="bold" gutterBottom textAlign="center">
      Compare Colleges
    </Typography>
    <Typography variant="body1" color="black" textAlign="center" mb={4}>
      Use our comparison tool to evaluate colleges side by side based on various essential criteria to help you make an informed decision.
    </Typography>

    <Grid container spacing={2} justifyContent="center" mb={4}>
      <Grid item xs={12} sm={6} md={5}>
        <TextField
          fullWidth
          select
          label="Select College 1"
          value={college1}
          onChange={(e) => setCollege1(e.target.value)}
          sx={{ backgroundColor: '#fff', borderRadius: 1 }}
        >
          {colleges.map((college) => (
            <MenuItem key={college} value={college}>
              {college}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6} md={5}>
        <TextField
          fullWidth
          select
          label="Select College 2"
          value={college2}
          onChange={(e) => setCollege2(e.target.value)}
          sx={{ backgroundColor: '#fff', borderRadius: 1 }}
        >
          {colleges.map((college) => (
            <MenuItem key={college} value={college}>
              {college}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
    </Grid>

    <Grid container spacing={2} mb={4}>
      {features.map((feature, index) => (
        <Grid item xs={6} sm={4} md={3} key={index}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              p: 1.5,
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderRadius: 2,
              transition: '0.3s',
              color: '#000',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 1)',
              },
            }}
          >
            <Box mr={1}>{feature.icon}</Box>
            <Typography variant="body2">{feature.label}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>

    <Box textAlign="center">
      <Button
        variant="contained"
         onClick={handleCompareClick}
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
      >
        Compare Colleges
      </Button>
    </Box>
  </CardContent>
</Card>

        </Grid>
      </Grid>
    </Box>
  );
}

export default Compare;
