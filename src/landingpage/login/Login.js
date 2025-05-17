import React from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  Grid,
  Link,
} from "@mui/material";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    console.log({ email, password });
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, mt: 10 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Login to Your Account
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Email ID"
            name="email"
            type="email"
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            required
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, mb: 2 }}
          >
            Login
          </Button>

          {/* Links Section */}
          <Grid container justifyContent="space-between">
            <Grid item>
              <Link href="/forgot-password" variant="body2">
                Forgot Password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                Create Account
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
