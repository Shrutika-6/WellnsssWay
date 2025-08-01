const Emotion = require('../models/Emotion');
const User = require('../models/User');

const saveEmotion = async (req, res) => {
  try {
    const { userId, emotion } = req.body;
    
    // Verify user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Save new emotion (the pre-save hook will handle the limit)
    const newEmotion = await Emotion.create({ userId, emotion });
    
    res.status(201).json(newEmotion);
  } catch (error) {
    res.status(500).json({ message: 'Error saving emotion', error: error.message });
  }
};

const getUserEmotions = async (req, res) => {
  try {
    const { userId } = req.params;
    
    // Get emotions sorted by newest first
    const emotions = await Emotion.find({ userId })
      .sort({ timestamp: -1 })
      .limit(5);
    
    res.json(emotions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching emotions', error: error.message });
  }
};

module.exports = {
  saveEmotion,
  getUserEmotions
};