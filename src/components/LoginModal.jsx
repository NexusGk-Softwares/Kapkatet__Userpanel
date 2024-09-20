import React, { useState } from 'react';
import { Typography, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';

function LoginModal({ open, onClose }) {
  const [showPassword, setShowPassword] = useState(false);

  // Validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  // Formik form handler
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log("Form Submitted", values); // Debugging log for form submission
      try {
        const response = await axios.post('http://your-backend-url/api/user/login', {
          email: values.email,
          password: values.password,
        });

        console.log(response.data); // Check response from the API
        if (response.data.success) {
          console.log('Login successful');
          const token = response.data.token;
          // Save the JWT token in localStorage for future requests
          localStorage.setItem('token', token);
          // Redirect user or show success message
        } else {
          console.error('Login failed', response.data.message);
          // Handle login failure (e.g., show error message to the user)
        }
      } catch (error) {
        console.error('Error during login', error); // Handle and log error during request
      }
    },
  });

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        <form onSubmit={formik.handleSubmit}>
          {/* Email Field */}
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

          {/* Password Field */}
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

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: 16 }}
          >
            Login
          </Button>
        </form>
      </DialogContent>

      {/* Dialog Actions */}
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default LoginModal;
