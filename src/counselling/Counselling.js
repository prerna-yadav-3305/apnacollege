import React from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Divider,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from '../landingpage/Footer';
import Navbar from '../landingpage/home/Navbar';

const counsellingMethods = [
  {
    title: 'JOSAA Counselling',
    description: 'Joint Seat Allocation Authority for admission to IITs, NITs, IIITs, and GFTIs.',
    eligibility: 'JEE Advanced for IITs, JEE Main for NITs, IIITs & GFTIs',
    rounds: 6,
    mode: 'Online',
  },
  {
    title: 'CUET Counselling',
    description: 'CUET-based centralized counselling for central universities.',
    eligibility: 'CUET UG or PG Score',
    rounds: 3,
    mode: 'Online & Offline (some states)',
  },
];

const seatMatrix = [
  { branch: 'CSE', total: 120, open: 50, obc: 32, sc: 20, st: 18 },
  { branch: 'ECE', total: 90, open: 40, obc: 25, sc: 15, st: 10 },
  { branch: 'Mechanical', total: 60, open: 25, obc: 18, sc: 10, st: 7 },
];

const Counselling = () => {
  return (
    <>
    <Navbar />
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        🎓 College Counselling Process
      </Typography>

      <Typography variant="body1" sx={{ mb: 4 }}>
        Learn about counselling methods, seat matrix, and branch availability for different entrance-based college admissions.
      </Typography>

      {/* Counselling Methods */}
      <Box sx={{ mb: 5 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          🧭 Counselling Methods
        </Typography>

        {counsellingMethods.map((method, index) => (
          <Accordion key={index} sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">{method.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography><strong>Description:</strong> {method.description}</Typography>
              <Typography><strong>Eligibility:</strong> {method.eligibility}</Typography>
              <Typography><strong>Rounds:</strong> {method.rounds}</Typography>
              <Typography><strong>Mode:</strong> {method.mode}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Seat Matrix Table */}
      <Box>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          🪑 Seat & Branch Availability
        </Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Branch</strong></TableCell>
                <TableCell align="center">Total Seats</TableCell>
                <TableCell align="center">Open</TableCell>
                <TableCell align="center">OBC</TableCell>
                <TableCell align="center">SC</TableCell>
                <TableCell align="center">ST</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {seatMatrix.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.branch}</TableCell>
                  <TableCell align="center">{row.total}</TableCell>
                  <TableCell align="center">{row.open}</TableCell>
                  <TableCell align="center">{row.obc}</TableCell>
                  <TableCell align="center">{row.sc}</TableCell>
                  <TableCell align="center">{row.st}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Note */}
      <Box sx={{ mt: 4 }}>
        <Chip label="Note: Seat availability may vary by round and category." color="warning" variant="outlined" />
      </Box>
    </Box>
    <Footer />
    </>
  );
};

export default Counselling;
