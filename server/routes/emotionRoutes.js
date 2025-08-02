const express = require('express');
const { saveEmotion, getUserEmotions } = require('../controllers/emotionController');
const verifyToken = require('../middleware/auth');
const router = express.Router();

// Save new emotion
router.post('/', verifyToken, saveEmotion);

// Get user's emotions
router.get('/user/:userId', getUserEmotions);

module.exports = router;