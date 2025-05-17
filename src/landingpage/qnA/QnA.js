import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  IconButton,
  Chip,
  Collapse,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SendIcon from '@mui/icons-material/Send';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Navbar from '../home/Navbar';
import Footer from '../Footer';

const initialQuestions = [
  {
    id: 1,
    question: 'What is the eligibility criteria for JOSAA counseling?',
    answer: 'You need to qualify JEE Advanced for IITs and JEE Main for NITs, IIITs and GFTIs.',
    queries: [],
  },
  {
    id: 2,
    question: 'Can I change my preferences after locking in CUET counseling?',
    answer: '',
    queries: [],
  },
];

const QAPage = () => {
  const [questions, setQuestions] = useState(initialQuestions);
  const [newQuestion, setNewQuestion] = useState('');
  const [answers, setAnswers] = useState({});
  const [queries, setQueries] = useState({});

  const handleAnswerSubmit = (id) => {
    const updatedQuestions = questions.map((q) =>
      q.id === id ? { ...q, answer: answers[id] } : q
    );
    setQuestions(updatedQuestions);
    setAnswers({ ...answers, [id]: '' });
  };

  const handleQuerySubmit = (id) => {
    const updatedQuestions = questions.map((q) =>
      q.id === id ? { ...q, queries: [...q.queries, queries[id]] } : q
    );
    setQuestions(updatedQuestions);
    setQueries({ ...queries, [id]: '' });
  };

  const handleAddQuestion = () => {
    if (newQuestion.trim()) {
      const newQ = {
        id: Date.now(),
        question: newQuestion,
        answer: '',
        queries: [],
      };
      setQuestions([newQ, ...questions]);
      setNewQuestion('');
    }
  };

  return (
    <>
    <Navbar />
    <Box sx={{ padding: 4, maxWidth: 900, margin: 'auto' }}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        ❓ Question & Answer Portal
      </Typography>
      <Typography variant="body1" mb={4}>
        Ask your doubts or help others by answering them. Dive into the discussion if something isn't clear!
      </Typography>

      {/* Ask Question */}
      <Card sx={{ mb: 4, p: 2 }}>
        <Typography variant="h6" mb={2}><HelpOutlineIcon /> Ask a New Question</Typography>
        <TextField
          fullWidth
          label="Your question"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          variant="outlined"
        />
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={handleAddQuestion}
          endIcon={<SendIcon />}
        >
          Submit
        </Button>
      </Card>

      {/* Questions List */}
      {questions.map((q) => (
        <Card key={q.id} sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              <QuestionAnswerIcon color="primary" /> {q.question}
            </Typography>
            <Divider sx={{ my: 2 }} />

            {q.answer ? (
              <Box>
                <Typography variant="subtitle1" color="green">
                  <strong>Answer:</strong> {q.answer}
                </Typography>

                <Collapse in>
                  <Box mt={2}>
                    <Typography variant="subtitle2" gutterBottom>Have a doubt on this answer?</Typography>
                    <TextField
                      fullWidth
                      size="small"
                      placeholder="Ask your query here..."
                      value={queries[q.id] || ''}
                      onChange={(e) => setQueries({ ...queries, [q.id]: e.target.value })}
                    />
                    <Button
                      size="small"
                      sx={{ mt: 1 }}
                      variant="outlined"
                      onClick={() => handleQuerySubmit(q.id)}
                    >
                      Ask Query
                    </Button>
                  </Box>
                </Collapse>

                {q.queries.length > 0 && (
                  <Box mt={2}>
                    <Typography variant="subtitle2">Queries on this answer:</Typography>
                    {q.queries.map((qry, i) => (
                      <Chip
                        key={i}
                        label={qry}
                        sx={{ mt: 1, mr: 1 }}
                        variant="outlined"
                        color="warning"
                      />
                    ))}
                  </Box>
                )}
              </Box>
            ) : (
              <Box>
                <Typography variant="subtitle2">No answer yet. Be the first to help!</Typography>
                <TextField
                  fullWidth
                  label="Your answer"
                  value={answers[q.id] || ''}
                  onChange={(e) => setAnswers({ ...answers, [q.id]: e.target.value })}
                  sx={{ mt: 2 }}
                />
                <Button
                  variant="contained"
                  sx={{ mt: 1 }}
                  onClick={() => handleAnswerSubmit(q.id)}
                  endIcon={<SendIcon />}
                >
                  Submit Answer
                </Button>
              </Box>
            )}
          </CardContent>
        </Card>
      ))}
    </Box>
    <Footer />
    </>
  );
};

export default QAPage;
