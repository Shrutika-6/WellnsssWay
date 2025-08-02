const express = require('express');
const { createUser, createDoctor, searchUsers } = require('../controllers/userController');

const router = express.Router();

// Create general user
router.post('/', createUser);

// Create doctor (special endpoint)
router.post('/doctor', createDoctor);

router.get('/search', searchUsers);

module.exports = router;