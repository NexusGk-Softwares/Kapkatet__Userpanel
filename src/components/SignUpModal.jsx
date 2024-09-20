import React, { useState } from 'react';
import {
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';
import LoginModal from './LoginModal'; // Import the LoginModal component

function SignUpModal({ open, onClose }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [error, setError] = useState('');

  const handleOpenLogin = () => {
    onClose();
    setLoginOpen(true);
  };

  const handleCloseLogin = () => {
    setLoginOpen(false);
  };

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

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post('http://your-backend-url/api/user/register', {
          name: values.name,
          email: values.email,
          password: values.password,
        });

        if (response.data.success) {
          console.log('Registration successful');
          // Handle successful registration
        } else {
          setError(response.data.message); // Handle error message
        }
      } catch (error) {
        console.error('Error during registration', error);
        setError('An error occurred during registration.');
      }
    },
  });

  return (
    <>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
        <DialogTitle>Sign Up</DialogTitle>
        <DialogContent>
          <form onSubmit={formik.handleSubmit}>
            {error && (
              <Typography color="error" variant="body2" style={{ marginBottom: 16 }}>
                {error}
              </Typography>
            )}
            <TextField
              label="Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              fullWidth
              variant="outlined"
              margin="normal"
              size="small"
            />
            <TextField
              label="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              fullWidth
              variant="outlined"
              margin="normal"
              size="small"
            />
            <TextField
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
              margin="normal"
              size="small"
              InputProps={{
                endAdornment: (
                  <IconButton
                    edge="end"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="toggle password visibility"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
            />
            <TextField
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
              margin="normal"
              size="small"
              InputProps={{
                endAdornment: (
                  <IconButton
                    edge="end"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label="toggle password visibility"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: 16 }}
            >
              Sign Up
            </Button>
            <Typography variant="body2">
              Already have an account?{' '}
              <span
                style={{ textDecoration: 'none', color: '#3f51b5', cursor: 'pointer' }}
                onClick={handleOpenLogin}
              >
                Login
              </span>
            </Typography>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <LoginModal open={isLoginOpen} onClose={handleCloseLogin} />
    </>
  );
}

export default SignUpModal;
