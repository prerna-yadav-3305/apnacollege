import React, { useState } from 'react';
import { TextField, Box, Grid, Typography, Accordion, AccordionSummary, AccordionDetails, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CompareCollege = () => {
  const [colleges, setColleges] = useState(['', '', '', '']);

  const handleCollegeChange = (index, value) => {
    const updatedColleges = [...colleges];
    updatedColleges[index] = value;
    setColleges(updatedColleges);
  };

  const sections = [
    'College Rankings',
    'College Placement',
    'College Details',
    'College Facilities',
    'Courses Offered',
    'Course Details',
    'Course Placement',
    'Exams & Cut-Offs',
    'College Reviews',
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Box
        sx={{
          background: '#fff5e5',
          p: 2,
          borderRadius: 2,
          boxShadow: 1,
          mb: 3,
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          College Compare
        </Typography>
        <Typography variant="body2">
          Compare up to 4 colleges based on your preferred course and get comparison on their ranks, fees, placements, seats, infrastructure and various other details.
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ mb: 4 }}>
        {colleges.map((college, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#f5f5f5',
                borderRadius: 2,
                p: 1,
              }}
            >
              <TextField
                fullWidth
                variant="standard"
                placeholder="Add a College"
                value={college}
                onChange={(e) => handleCollegeChange(index, e.target.value)}
                InputProps={{
                  disableUnderline: true,
                }}
              />
              <IconButton>
                <SearchIcon />
              </IconButton>
            </Box>
          </Grid>
        ))}
      </Grid>

      {sections.map((section, idx) => (
        <Accordion key={idx} sx={{ mb: 1 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold">{section}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary">
              {/* Placeholder: Later insert comparison data from backend */}
              Comparison data for "{section}" will appear here.
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default CompareCollege;
