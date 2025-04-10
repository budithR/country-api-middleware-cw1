const express = require('express');
const router = express.Router();
const { register, login, registerAdmin } = require('../controllers/auth');

// Public routes
router.post('/register', register);
router.post('/registerAdmin', registerAdmin);
router.post('/login', login);

module.exports = router;