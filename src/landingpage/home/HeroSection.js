import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
  Container,
  IconButton,
  InputBase,
  Paper
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function HeroSection() {
   const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup');
  };
  function handleLoginClick() {
    navigate("/login");
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <Box
      sx={{
        backgroundImage: `url('https://th.bing.com/th/id/OIP.nKN34Rej5WxuVJzwfeY3_wHaEK?cb=iwc2&rs=1&pid=ImgDetMain')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        color: 'white',
        position: 'relative',
      }}
    >
      {/* Navbar */}
      <AppBar position="static" elevation={0} sx={{ background: 'transparent', boxShadow: 'none' }}>
        <Container maxWidth="lg">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {/* Logo / Brand */}
            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
              Apna College
            </Typography>

            {/* Right Section: Dropdown + Auth Buttons */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Button
                onClick={handleMenuOpen}
                endIcon={<ArrowDropDownIcon />}
                sx={{
                  color: 'white',
                  textTransform: 'none',
                  fontWeight: 500,
                }}
              >
                Explore
              </Button>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                <MenuItem onClick={handleMenuClose}>Explore Colleges</MenuItem>
                <MenuItem onClick={handleMenuClose}>Compare Colleges</MenuItem>
                <MenuItem onClick={handleMenuClose}>Review Colleges</MenuItem>
                 <MenuItem onClick={handleMenuClose}>About</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Shortlisted Colleges</MenuItem>
                   <MenuItem onClick={handleMenuClose}>Apply Counselling</MenuItem>
                    <MenuItem onClick={handleMenuClose}> Search Colleges</MenuItem>
                     <MenuItem onClick={handleMenuClose}>QnA</MenuItem>
              </Menu>

              <Button onClick={handleLoginClick} 
                sx={{
                  color: 'white',
                  border: '1px solid white',
                  textTransform: 'none',
                  fontWeight: 500,
                }}
              >
                Login
              </Button>
              <Button
                variant="contained"  onClick={handleSignUpClick}
                sx={{
                  backgroundColor: '#000',
                  color: '#fff',
                  textTransform: 'none',
                  fontWeight: 500,
                  borderRadius: '20px',
                  px: 3,
                  '&:hover': {
                    backgroundColor: '#333',
                  },
                }}
              >
                Sign Up
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero Text and Search */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          width: '90%',
          maxWidth: '700px',
        }}
      >
        <Typography variant="h3" fontWeight="bold" sx={{ mb: 3 }}>
          Now, The college you are looking for , is looking for you
        </Typography>

        {/* Search bar */}
        <Paper
          component="form"
          sx={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: '30px',
            p: '2px 10px',
            backgroundColor: 'white',
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search for college, location..."
            inputProps={{ 'aria-label': 'search college' }}
          />
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Box>
    </Box>
  );
}

export default HeroSection;
