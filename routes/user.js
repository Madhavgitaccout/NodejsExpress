// routes/index.js
const express = require('express');
const router = express.Router();

// Import the controller
const profileController = require('../controller/profileController');

router.get('/profile', profileController.getprofile);

module.exports = router;
