import React from 'react';
import { Box, Typography, Grid, Link, Divider, IconButton, Stack } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', py: 6, px: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body2">
            We help students find the right colleges with honest reviews, comparisons, and expert guidance.
          </Typography>
        </Grid>
        <Grid item xs={6} md={2}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Explore
          </Typography>
          <Link href="#" color="inherit" underline="hover" display="block">
            Top Colleges
          </Link>
          <Link href="#" color="inherit" underline="hover" display="block">
            Engineering
          </Link>
          <Link href="#" color="inherit" underline="hover" display="block">
            MBA
          </Link>
        </Grid>
        <Grid item xs={6} md={2}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Help
          </Typography>
          <Link href="#" color="inherit" underline="hover" display="block">
            FAQs
          </Link>
          <Link href="#" color="inherit" underline="hover" display="block">
            Support
          </Link>
          <Link href="#" color="inherit" underline="hover" display="block">
            Contact Us
          </Link>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Connect
          </Typography>
          <Typography variant="body2">Email: support@yourcollegeplatform.com</Typography>
          <Typography variant="body2">Phone: +91-9876543210</Typography>

          {/* Social Media Icons */}
          <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
            <IconButton component="a" href="https://www.instagram.com/" target="_blank" rel="noopener" sx={{ color: '#E1306C' }}>
              <InstagramIcon />
            </IconButton>
            <IconButton component="a" href="https://www.youtube.com/" target="_blank" rel="noopener" sx={{ color: '#FF0000' }}>
              <YouTubeIcon />
            </IconButton>
            <IconButton component="a" href="https://www.facebook.com/" target="_blank" rel="noopener" sx={{ color: '#1877F2' }}>
              <FacebookIcon />
            </IconButton>
            <IconButton component="a" href="https://www.linkedin.com/" target="_blank" rel="noopener" sx={{ color: '#0A66C2' }}>
              <LinkedInIcon />
            </IconButton>
            <IconButton component="a" href="https://www.twitter.com/" target="_blank" rel="noopener" sx={{ color: '#1DA1F2' }}>
              <TwitterIcon />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4, borderColor: '#ffffff40' }} />

      {/* Centered Social Icons at the bottom as well (optional) */}
      {/* <Stack direction="row" spacing={2} justifyContent="center" mb={2}>
        [Put the same icons here if needed]
      </Stack> */}

      <Typography variant="body2" align="center" color="inherit">
        © {new Date().getFullYear()} YourCollegePlatform. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
