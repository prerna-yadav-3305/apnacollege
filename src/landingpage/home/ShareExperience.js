import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Rating,
  Avatar,
  Grid,
  Paper,
  Stack,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ShareExperience = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const testimonials = [
    {
      quote: '“No stress, just connect!”',
      name: 'Riya Sharma',
      description: 'Student, B.Tech',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    {
      quote: '“Everything at your fingertips!”',
      name: 'Amit Verma',
      description: 'MBA Aspirant',
      avatar: 'https://i.pravatar.cc/150?img=2',
    },
    {
      quote: '“Effortless exploration for parents too!”',
      name: 'Neha Singh',
      description: 'Parent',
      avatar: 'https://i.pravatar.cc/150?img=3',
    },
  ];

  return (
    <Box
      sx={{
        px: { xs: 2, md: 6 },
        py: 8,
        background: 'linear-gradient(to right, #0f172a, #1e293b)',
        color: '#f8fafc',
        minHeight: '100vh',
      }}
    >
      {/* Section Heading */}
      <Typography
        variant="h3"
        fontWeight="bold"
        textAlign="center"
        mb={1}
        sx={{
          background: 'linear-gradient(to right, #22c55e, #3b82f6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Share Your Experience
      </Typography>
      <Typography
        variant="subtitle1"
        textAlign="center"
        color="#cbd5e1"
        mb={6}
      >
        Let your voice help others make informed decisions.
      </Typography>

      {/* Testimonials */}
      <Grid container spacing={4} justifyContent="center" mb={8}>
        {testimonials.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              sx={{
                backgroundColor: '#1e293b',
                color: '#f1f5f9',
                p: 3,
                borderRadius: 4,
                transition: '0.3s',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
                },
              }}
              elevation={0}
            >
              <Typography variant="body1" fontStyle="italic" mb={3}>
                {item.quote}
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar src={item.avatar} sx={{ width: 48, height: 48 }} />
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="#94a3b8">
                    {item.description}
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Feedback Form */}
      <Box
        sx={{
          maxWidth: 700,
          mx: 'auto',
          backgroundColor: '#0f172a',
          border: '1px solid #334155',
          borderRadius: 6,
          p: 4,
          boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
        }}
      >
        <Typography variant="h5" fontWeight="bold" textAlign="center" mb={3}>
          Write Your Story
        </Typography>

        <Box textAlign="center" mb={3}>
          <Rating
            name="experience-rating"
            value={rating}
            onChange={(_, newValue) => setRating(newValue)}
            precision={0.5}
            size="large"
            sx={{
              '& .MuiRating-iconFilled': { color: '#facc15' },
              '& .MuiRating-iconHover': { color: '#fde047' },
            }}
          />
        </Box>

        <TextField
          multiline
          rows={4}
          fullWidth
          placeholder="Describe your experience..."
          variant="filled"
          InputProps={{
            sx: {
              backgroundColor: '#1e293b',
              color: '#f1f5f9',
              borderRadius: 2,
            },
          }}
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />

        <Button
          fullWidth
          variant="contained"
          endIcon={<SendIcon />}
          sx={{
            mt: 3,
            borderRadius: 3,
            backgroundColor: '#22c55e',
            '&:hover': {
              backgroundColor: '#16a34a',
            },
            py: 1.3,
            fontSize: '1rem',
          }}
          disabled={!feedback.trim()}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default ShareExperience;
