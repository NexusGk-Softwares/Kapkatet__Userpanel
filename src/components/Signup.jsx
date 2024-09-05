import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { TextField, Button, Typography, Container, Paper, IconButton, InputAdornment } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Visibility, VisibilityOff, Google, Facebook, Twitter } from '@mui/icons-material';

// Styled Components
const Root = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: 400,
  margin: 'auto',
  backgroundColor: '#ffffff',
  boxShadow: theme.shadows[1],
}));

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const Input = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const SocialContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(2),
  gap: theme.spacing(2),
}));

// Enhanced Validation Schema
const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters long')
    .matches(/^[a-zA-Z\s]*$/, 'Name can only contain letters and spaces')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[\W_]/, 'Password must contain at least one special character')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
    },
  });

  

  return (
    <Container className="flex items-center justify-center min-h-screen bg-gray-100">
      <Root>
        <Title variant="h5" align="center">
          Sign Up
        </Title>
        <form onSubmit={formik.handleSubmit}>
          <Input
            label="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            fullWidth
            variant="outlined"
            size="small"
          />
          <Input
            label="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            fullWidth
            variant="outlined"
            size="small"
          />
          <Input
            label="Password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
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
          <Input
            label="Confirm Password"
            name="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
            fullWidth
            variant="outlined"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label="toggle password visibility"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <ButtonStyled
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Sign Up
          </ButtonStyled>
        </form>
        
       
        <Typography variant="body2" align="center" marginTop={2}>
          Already have an account?{' '}
          <Link to="/login" style={{ textDecoration: 'none', color: '#3f51b5' }}>
            Log In
          </Link>
        </Typography>
      </Root>
    </Container>
  );
}

export default SignUp;
