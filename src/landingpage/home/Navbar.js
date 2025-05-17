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
  
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



function Navbar() {
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
     <AppBar position="static" elevation={0} sx={{ background: 'rgb(209, 166, 36)', boxShadow: 'none' }}>
        <Container maxWidth="lg">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {/* Logo / Brand */}
            <Typography variant="h4"  sx={{ fontWeight: 'bold' }}>
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
                  backgroundColor: 'rgb(165, 182, 205)',
                  color: '#155ab',
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

  );
    
}

export default Navbar;
