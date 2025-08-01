const User = require('../models/User');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    if (user.password !== password) {
      return res.status(401).json({ message: "Incorrect password" });
    }
    
    res.json({ 
      message: "Login successful", 
      user: { 
        id: user._id, 
        email: user.email,
        name: user.name,
        role: user.role 
      } 
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { login };