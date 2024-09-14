import React from 'react';
import { Container, Box, Typography, IconButton, Link as MuiLink } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram, Phone, Email, Mail } from '@mui/icons-material';
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <Container component="footer" maxWidth={false} sx={{ padding: '2rem', backgroundColor:'#00BFFF', overflowX: 'hidden' }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', flexWrap: 'wrap' }}>
                {/* Main Footer Sections */}
                <Box sx={{ flex: 1, marginBottom: '1rem', marginRight: { sm: '1rem' } }}>
                    <Typography variant="h6" gutterBottom>Company</Typography>
                    <Typography variant="body2">
                        <Link to="/about" style={{ color: 'black', textDecoration: 'none' }}>About Us</Link>
                    </Typography>
                    <br />
                    <Typography variant="body2">
                        <MuiLink href="#" underline="none" sx={{ color: 'black' }}>Our Products</MuiLink>
                    </Typography>
                    <br />
                    <Typography variant="body2">
                        <Link to="/home" style={{ color: 'black', textDecoration: 'none' }}>Home</Link>
                    </Typography>
                </Box>

                <Box sx={{ flex: 1, marginBottom: '1rem', marginRight: { sm: '1rem' } }}>
                    <Typography variant="h6" gutterBottom>Useful Links</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                        <Link to="/signup" style={{ color: 'black', textDecoration: 'none' }}>Sign Up</Link>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                        <Link to="/login" style={{ color: 'black', textDecoration: 'none' }}>Login</Link>
                    </Box>
                </Box>

                <Box sx={{ flex: 1, marginBottom: '1rem', marginRight: { sm: '1rem' } }}>
                    <Typography variant="h6" gutterBottom>Contact Us</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                        <Phone sx={{ marginRight: '0.5rem' }} />
                        <Typography variant="body2">Phone: +254 734 457 284</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                        <Email sx={{ marginRight: '0.5rem' }} />
                        <Typography variant="body2">
                            Email: <MuiLink href="mailto:KapkatetDairyFarm@gmail.com" sx={{ color: 'black' }}>KapkatetDairyFarm@gmail.com</MuiLink>
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                        <Mail sx={{ marginRight: '0.5rem' }} />
                        <Typography variant="body2">P.O. Box: 648 Nairobi</Typography>
                    </Box>
                </Box>

                <Box sx={{ flex: 1, marginBottom: '1rem' }}>
                    <Typography variant="h6" gutterBottom>Follow Us</Typography>
                    <Box sx={{ display: 'flex', gap: '1rem' }}>
                        <IconButton
                            href="https://www.facebook.com/share/yDgcipkH499T1c9c/?"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: '#3b5998' }} // Facebook Blue
                        >
                            <Facebook />
                        </IconButton>
                        <IconButton
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: '#1da1f2' }} // Twitter Blue
                        >
                            <Twitter />
                        </IconButton>
                        <IconButton
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: '#0077b5' }} // LinkedIn Blue
                        >
                            <LinkedIn />
                        </IconButton>
                        <IconButton
                            href="https://www.instagram.com/p/C3126SWI--2/?igsh=cmV5czRrYXVsc3A2"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: '#e4405f' }} // Instagram Pink
                        >
                            <Instagram />
                        </IconButton>
                    </Box>
                </Box>
            </Box>

            {/* Copyright Section */}
            <Box sx={{ marginTop: '2rem', borderTop: '1px solid #ccc', paddingTop: '1rem', textAlign: 'center' }}>
                <Typography variant="body2">
                    © {new Date().getFullYear()} Copyright: Kapkatet Dairy Farm. All Rights Reserved.
                </Typography>
            </Box>
        </Container>
    );
}

export default Footer;