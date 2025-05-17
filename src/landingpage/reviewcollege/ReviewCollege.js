// ReviewCollegePage.jsx
import React from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Footer from '../Footer';
import Navbar from '../home/Navbar';

const ReviewCollege = () => {
  return (
    <>
    <Navbar />
    <Box
      sx={{
        bgcolor: '#f4eae3',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h4" fontWeight="bold" color="#003322" gutterBottom>
          Review your college
        </Typography>

        <Typography variant="body1" sx={{ mb: 4 }}>
          Take a short survey and leave a review on your college to help others find the right school for them.
        </Typography>

        <TextField
          fullWidth
          placeholder="Search for a college or university"
          variant="outlined"
          sx={{
            backgroundColor: '#fff',
            borderRadius: '30px',
            mb: 2,
            '& .MuiOutlinedInput-root': {
              borderRadius: '30px',
              paddingRight: 0,
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          variant="contained"
          disabled
          sx={{
            borderRadius: '25px',
            px: 5,
            py: 1,
            textTransform: 'none',
            bgcolor: '#ccc',
            mb: 3,
          }}
        >
          Start survey
        </Button>

        
      </Container>
    </Box>
    <Footer />
    </>
  );
};

export default ReviewCollege;
