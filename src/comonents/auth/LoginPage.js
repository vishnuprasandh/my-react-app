import React from 'react';
import { Button, TextField, Container, Typography, Grid } from '@mui/material';

function LoginPage() {
  const paperstyle={padding :20,height:'70vh',widht:280, margin:"20px auto"}
  
   return(
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              fullWidth
              required
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </Container>
  );
}

export default LoginPage;
