const express = require('express');
const { createUser, createDoctor } = require('../controllers/userController');

const router = express.Router();

// Create general user
router.post('/', createUser);

// Create doctor (special endpoint)
router.post('/doctor', createDoctor);

module.exports = router;