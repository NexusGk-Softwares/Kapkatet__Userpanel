import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, IconButton, InputAdornment, Checkbox, FormControlLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import BackgroundImage from '../assets/logo.jpeg'; // Adjust the path to your image

// Styled Components
const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden', // Prevents image overflow

  // Switch to column layout on small screens
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingTop: theme.spacing(2),
  },
}));

const ImageSection = styled('div')(({ theme }) => ({
  flex: 1,
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: 'cover',      // Ensures the image covers the section
  backgroundPosition: 'center', // Centers the image
  backgroundRepeat: 'no-repeat', // Prevents the image from repeating
  height: '100%',               // Ensure it takes full height on large screens

  // Adjust the image height for mobile and tablets
  [theme.breakpoints.down('md')]: {
    height: '50vh', // Reduce height for tablets
    maxWidth: '850%', 
  },
  [theme.breakpoints.down('sm')]: {
    height: '30vh', // Reduce height for mobile phones
    width: '100%',
    backgroundSize: 'contain', // Ensure the image fits within the screen
  },
}));

const FormSection = styled(Paper)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(4),
  maxWidth: '50%', // Ensure it occupies half the screen width
  backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent background
  boxShadow: theme.shadows[5],
  borderRadius: theme.spacing(2),
  zIndex: 2, // Ensure the form appears on top of the image

  // Adjust form width and margin for small screens
  [theme.breakpoints.down('md')]: {
    maxWidth: '80%', // Make the form smaller on tablets
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '90%', // Further reduce form size on mobile
    padding: theme.spacing(2),
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  color: theme.palette.primary.main,
  fontWeight: 'bold',
  fontFamily: 'Arial, sans-serif',
  letterSpacing: '2px',
  textAlign: 'center',
}));

const Input = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiInputLabel-root': {
    color: theme.palette.primary.main,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.primary.light,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  padding: theme.spacing(1.5),
  borderRadius: theme.spacing(1),
}));

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginValues, setLoginValues] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginValues({
      ...loginValues,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    setLoginValues({
      ...loginValues,
      rememberMe: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission with 'Remember Me' logic
    console.log(loginValues);
  };

  return (
    <Container>
      <ImageSection />
      <FormSection>
        <Title variant="h4">
          Welcome Back
        </Title>
        <form onSubmit={handleSubmit}>
          <Input
            label="Email"
            name="email"
            value={loginValues.email}
            onChange={handleInputChange}
            fullWidth
            variant="outlined"
            size="small"
          />
          <Input
            label="Password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={loginValues.password}
            onChange={handleInputChange}
            fullWidth
            variant="outlined"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="toggle password visibility"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={loginValues.rememberMe}
                onChange={handleCheckboxChange}
                name="rememberMe"
                color="primary"
              />
            }
            label="Remember Me"
          />
          <Typography variant="body2" align="right">
            <Link to="/forgot-password" style={{ textDecoration: 'none', color: '#3f51b5' }}>
              Forgot Password?
            </Link>
          </Typography>
          <ButtonStyled
            type="submit"
            variant="contained"
            fullWidth
          >
            Login
          </ButtonStyled>
        </form>
        <Typography variant="body2" align="center" marginTop={2}>
          Don't have an account?{' '}
          <Link to="/signup" style={{ textDecoration: 'none', color: '#3f51b5' }}>
            Sign Up
          </Link>
        </Typography>
      </FormSection>
    </Container>
  );
}

export default Login;
