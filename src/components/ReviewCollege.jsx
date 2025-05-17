import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  Link
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const ReviewCollege = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSurveyStart = () => {
    // Redirect to survey form or handle selection logic
    if (searchTerm.trim()) {
      console.log(`Start survey for: ${searchTerm}`);
      // Navigate or call backend here
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#f8f0eb',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        textAlign: 'center'
      }}
    >
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
        Review your college
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', maxWidth: 600 }}>
        Take a short survey and leave a review on your college to help others find the right school for them.
      </Typography>

      <Box
        sx={{
          width: '100%',
          maxWidth: 600,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <TextField
          placeholder="Search for a college or university"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            sx: { borderRadius: '30px', backgroundColor: 'white' },
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />

        <Button
          variant="contained"
          color="success"
          size="large"
          sx={{ borderRadius: '30px', textTransform: 'none' }}
          onClick={handleSurveyStart}
        >
          Start survey
        </Button>

        <Link
          href="#"
          underline="hover"
          sx={{ mt: 1, color: '#1e40af', fontWeight: 500 }}
        >
          Review your graduate school instead
        </Link>
      </Box>
    </Box>
  );
};

export default ReviewCollege;
