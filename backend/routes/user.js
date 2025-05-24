const express = require('express')
const router = express.Router();
const User = require("../models/user");

router.post('/signup', async(req, res)=>{
  const {name, username, email, password} = req.body;
  try {
    const newUser = new User({ name, username, email, password });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  }
  catch (err) {
    res.status(400).json({ error: "User registration failed", details: err.message });
  }
});


module.exports = router;