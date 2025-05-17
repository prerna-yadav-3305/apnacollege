import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  
  Chip,
  Paper,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import Navbar from '../home/Navbar';
import Footer from '../Footer';

const dummyColleges = [
  {
    id: 1,
    name: "IISc Bangalore - Indian Institute of Science",
    location: "Bangalore",
    nirfRank: 1,
    rating: 4.7,
    reviews: 43,
    fees: "₹28.40K",
    ownership: "Public/Government",
    courses: ["M.E/M.Tech", "Ph.D"],
  },
  {
    id: 2,
    name: "JNU Delhi - Jawaharlal Nehru University",
    location: "New Delhi",
    nirfRank: 2,
    rating: 4.5,
    reviews: 86,
    fees: "₹600 - ₹607",
    ownership: "Public/Government",
    courses: ["M.A.", "Ph.D"],
  },
  {
    id: 3,
    name: "JMI New Delhi - Jamia Millia Islamia",
    location: "New Delhi",
    nirfRank: 3,
    rating: 4.5,
    reviews: 407,
    fees: "₹13.40K - ₹1.35L",
    ownership: "Public/Government",
    courses: ["M.A.", "Ph.D"],
  },
];

const ExploreCollege = () => {
  const [search, setSearch] = useState('');

  return (
    <>
    <Navbar />
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" mb={2}>Explore Colleges</Typography>

      {/* Search Bar */}
      <Paper sx={{ p: 1.5, mb: 3, display: 'flex', alignItems: 'center' }}>
        <SearchIcon sx={{ mr: 1 }} />
        <TextField
          fullWidth
          variant="standard"
          placeholder="Search by College Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Paper>

      <Grid container spacing={3}>
        {/* Filter Sidebar */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>Filters</Typography>

          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>NIRF Ranking</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControlLabel control={<Checkbox />} label="NIRF Rank '24" />
              <FormControlLabel control={<Checkbox />} label="Teaching ,Learning and resources" />
              <FormControlLabel control={<Checkbox />} label="Graduation Outcomes" />
               <FormControlLabel control={<Checkbox />} label="Outreach and Inclusity" />
                <FormControlLabel control={<Checkbox />} label="Perception" />
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>State</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControlLabel control={<Checkbox />} label="Goa" />
              <FormControlLabel control={<Checkbox />} label="Sikkim" />
              <FormControlLabel control={<Checkbox />} label="Tamil Nadu" />
                <FormControlLabel control={<Checkbox />} label="Madhya Pradesh" />
                 <FormControlLabel control={<Checkbox />} label="Karnataka" /> 
               <FormControlLabel control={<Checkbox />} label="Maharashtra" />
                <FormControlLabel control={<Checkbox />} label="Uttar Pradesh" />
                 <FormControlLabel control={<Checkbox />} label="West Bengal" />
                  <FormControlLabel control={<Checkbox />} label="Delhi" />
                   <FormControlLabel control={<Checkbox />} label="Kerala" />
                    <FormControlLabel control={<Checkbox />} label="Punjab" />
                     <FormControlLabel control={<Checkbox />} label="Rajasthan" />
                      <FormControlLabel control={<Checkbox />} label="Odisha" />
                       <FormControlLabel control={<Checkbox />} label="Gujrat" />
                        <FormControlLabel control={<Checkbox />} label="Andhra Pradesh" />
                         <FormControlLabel control={<Checkbox />} label="Telangana" />
                          <FormControlLabel control={<Checkbox />} label="Haryana" />
                           <FormControlLabel control={<Checkbox />} label="Assam" />
                            <FormControlLabel control={<Checkbox />} label="Jammu and Kashmir" />
                             <FormControlLabel control={<Checkbox />} label="Himachal Pradesh" />
                              <FormControlLabel control={<Checkbox />} label="Uttarakhnad" />
                              <FormControlLabel control={<Checkbox />} label="Chandigarh" />
                               <FormControlLabel control={<Checkbox />} label="Puducherry" />
                                <FormControlLabel control={<Checkbox />} label="Bihar" />
                                 <FormControlLabel control={<Checkbox />} label="Chattisgarh" />
                                  <FormControlLabel control={<Checkbox />} label="Manipur" />
                                   <FormControlLabel control={<Checkbox />} label="Meghalaya" />
                                    <FormControlLabel control={<Checkbox />} label="Jharkhand" />
                                     <FormControlLabel control={<Checkbox />} label="Mizoram" />
                                   
            </AccordionDetails>
          </Accordion>

         
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>City</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControlLabel control={<Checkbox />} label="Bangalore" />
              <FormControlLabel control={<Checkbox />} label="New Delhi" />
              <FormControlLabel control={<Checkbox />} label="Chennai" />
            </AccordionDetails>
          </Accordion>
           <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Ownership</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControlLabel control={<Checkbox />} label="Private" />
              <FormControlLabel control={<Checkbox />} label="Government" />
            
            </AccordionDetails>
          </Accordion>
           <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Exam</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControlLabel control={<Checkbox />} label="GATE" />
              <FormControlLabel control={<Checkbox />} label="CUET PG" />
              <FormControlLabel control={<Checkbox />} label="CMAT" />
              <FormControlLabel control={<Checkbox />} label="JEE Advanced" />
              <FormControlLabel control={<Checkbox />} label="NEET MDS" />
              <FormControlLabel control={<Checkbox />} label="DAVV CET" />
              <FormControlLabel control={<Checkbox />} label="CUET PG" />
              <FormControlLabel control={<Checkbox />} label="CAT" />
              <FormControlLabel control={<Checkbox />} label="GMAT" />
              <FormControlLabel control={<Checkbox />} label="XAT" />
              <FormControlLabel control={<Checkbox />} label="JAM" />
              <FormControlLabel control={<Checkbox />} label="MAT" />
              <FormControlLabel control={<Checkbox />} label="JEE MAIN" />
              <FormControlLabel control={<Checkbox />} label="ATMA" />
              <FormControlLabel control={<Checkbox />} label="IILET" />
              <FormControlLabel control={<Checkbox />} label="CLAT" />
              <FormControlLabel control={<Checkbox />} label="GRE" />
              <FormControlLabel control={<Checkbox />} label="NEET" />
              <FormControlLabel control={<Checkbox />} label="GPAT" />
              <FormControlLabel control={<Checkbox />} label="TOEFL" />
              <FormControlLabel control={<Checkbox />} label="MHT CET" />
            </AccordionDetails>
          </Accordion>
           <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Degree</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControlLabel control={<Checkbox />} label="BSc" />
              <FormControlLabel control={<Checkbox />} label="BCom" />
              <FormControlLabel control={<Checkbox />} label="BTEch" />
            </AccordionDetails>
          </Accordion>
          <Accordion>
           <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Fee</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControlLabel control={<Checkbox />} label="upto1Lakh" />
              <FormControlLabel control={<Checkbox />} label="Upto 2 Lakh" />
              <FormControlLabel control={<Checkbox />} label="Upto3 Lakh" />
            </AccordionDetails>
          </Accordion>
          <Accordion>
           <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Branch</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControlLabel control={<Checkbox />} label="Computer science" />
              <FormControlLabel control={<Checkbox />} label="Information Technology" />
              <FormControlLabel control={<Checkbox />} label="AIML" />
            </AccordionDetails>
          </Accordion>
        
        </Grid>

        {/* College Cards */}
        <Grid item xs={12} md={9}>
          {dummyColleges
            .filter(college => college.name.toLowerCase().includes(search.toLowerCase()))
            .map((college, index) => (
              <Card key={college.id} variant="outlined" sx={{ mb: 3 }}>
                <CardContent>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Box>
                      <Chip label={`#${college.nirfRank} NIRF Rank '24`} color="primary" />
                      <Typography variant="h6" mt={1}>{college.name}</Typography>
                      <Typography variant="body2" color="text.secondary">{college.ownership}</Typography>
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        <strong>Courses:</strong> {college.courses.join(', ')}
                      </Typography>
                      <Typography variant="body2"><strong>Fees:</strong> {college.fees}</Typography>
                      <Typography variant="body2" sx={{ mt: 0.5 }}>
                        ⭐ {college.rating} ({college.reviews} reviews)
                      </Typography>
                    </Box>

                    <Box display="flex" flexDirection="column" gap={1}>
                      <Button variant="outlined" size="small">Enquire</Button>
                      <Button variant="contained" size="small">Brochure</Button>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
        </Grid>
      </Grid>
    </Box>
    <Footer />
    </>
  );
};

export default ExploreCollege;
