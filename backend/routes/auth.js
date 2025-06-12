const express = require('express');
const router = express.Router();
const User = require("../models/user");
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middlewares/authMiddleware');


router.post('/', async (req, res) => {
  const { email, password } = req.body;
  
  try {
    // Find user by email
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }
    
    // Simple password comparison (in production, use bcrypt.compare)
    if (password !== user.password) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }
    
    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role || 'user' },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '7d' }
    );
    
    // Set token as HTTP-only cookie
    res.cookie('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Only in HTTPS
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      sameSite: 'strict'
    });
    
    // Return user info on successful authentication
    res.json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role || 'user'
      }
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Logout route
router.get('/logout', (req, res) => {
  res.clearCookie('auth_token');
  res.json({ success: true, message: 'Logged out successfully' });
});

// Auth status check route
router.get('/status', (req, res) => {
  try {
    const token = req.cookies.auth_token;
    
    if (!token) {
      return res.json({ authenticated: false });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    
    // Get user data (optional, you might want to return user data)
    User.findById(decoded.userId)
      .select('-password')
      .then(user => {
        if (!user) {
          return res.json({ authenticated: false });
        }
        
        res.json({ 
          authenticated: true,
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
          }
        });
      });
  } catch (error) {
    console.error('Auth status check failed:', error);
    res.json({ authenticated: false });
  }
});

module.exports = router;