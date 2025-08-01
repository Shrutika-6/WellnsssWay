const User = require('../models/User');

const createUser = async (req, res) => {
  try {
    // Set default role to 'general' if not provided
    const userData = {
      ...req.body,
      role: req.body.role || 'general'
    };
    
    const user = await User.create(userData);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role
    });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: "Email already exists" });
    } else if (error.name === 'ValidationError') {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  }
};

const createDoctor = async (req, res) => {
  try {
    const user = await User.create({ ...req.body, role: 'doctor' });
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role
    });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: "Email already exists" });
    } else {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  }
};

const searchUsers = async (req, res) => {
  try {
    const { query } = req.query;
    const users = await User.find({
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { email: { $regex: query, $options: 'i' } }
      ],
      role: 'general' // Only search general users
    }).select('-password');
    
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Search failed', error: error.message });
  }
};

module.exports = { 
  createUser, 
  createDoctor,
  searchUsers
};

module.exports = { createUser, createDoctor, searchUsers };