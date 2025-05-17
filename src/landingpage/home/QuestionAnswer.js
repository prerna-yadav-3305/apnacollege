import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
 
} from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { useNavigate } from 'react-router-dom';

function QuestionAnswerSection() {
  const navigate = useNavigate();
      const handleQnAClick = () => {
        navigate('/question');
      };
  return (
    <Box sx={{ px: 4, py: 6, backgroundColor: '#e3f2fd' }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Have Questions? Get Answers!
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={4}>
        Ask your doubts about admissions, branches, placements and get answers from other students.
      </Typography>

      {/* Ask a Question Card */}
      <Card sx={{ maxWidth: 700, mx: 'auto', mb: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Ask a Question
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={3}
            label="Type your question here..."
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            startIcon={<HelpOutlineIcon />}
            sx={{ borderRadius: 5, backgroundColor: '#1565c0' }}
          >
            Submit Question
          </Button>
        </CardContent>
      </Card>

      {/* Answer a Question Card */}
      <Card sx={{ maxWidth: 700, mx: 'auto' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Know the Answer? Help Others!
          </Typography>
         
          <Button
            variant="contained" onClick={handleQnAClick}
            startIcon={<QuestionAnswerIcon />}
            sx={{ borderRadius: 5, backgroundColor: '#2e7d32' }}
          >
           Answer
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default QuestionAnswerSection;
