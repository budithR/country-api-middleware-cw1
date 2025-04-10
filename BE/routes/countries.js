const express = require('express');
const router = express.Router();
const { getAllCountries, getCountryByName } = require('../controllers/countries');
const { authenticateJwtToken, authenticateApiKey } = require('../middleware/auth');

// Public route
router.get('/',  authenticateApiKey, getAllCountries);

// Authenticated route
router.get('/:name', authenticateApiKey, getCountryByName);

module.exports = router;