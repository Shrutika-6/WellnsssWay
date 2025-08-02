const mongoose = require('mongoose');

const EmotionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  emotion: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

// Ensure each user has max 5 emotion records
EmotionSchema.pre('save', async function(next) {
  const Emotion = mongoose.model('Emotion');
  const count = await Emotion.countDocuments({ userId: this.userId });
  
  if (count >= 5) {
    // Find the oldest emotion for this user and remove it
    const oldest = await Emotion.findOne({ userId: this.userId })
      .sort({ timestamp: 1 })
      .limit(1);
    
    if (oldest) {
      await Emotion.deleteOne({ _id: oldest._id });
    }
  }
  next();
});

module.exports = mongoose.model('Emotion', EmotionSchema);