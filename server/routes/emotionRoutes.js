const express = require('express');
const { saveEmotion, getUserEmotions } = require('../controllers/emotionController');
const router = express.Router();

// Save new emotion
router.post('/', saveEmotion);

// Get user's emotions
router.get('/user/:userId', getUserEmotions);

module.exports = router;