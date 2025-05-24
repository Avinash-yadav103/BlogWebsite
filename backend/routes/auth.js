const express = require('express');
const router = express.Router();
const User = require("../models/user");

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

module.exports = router;