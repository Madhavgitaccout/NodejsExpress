// routes/index.js
const express = require('express');
const router = express.Router();

// Import the controller
const homeController = require('../controller/homeController');

// Define the home route
router.get('/', homeController.getHome);
router.use('/profile', require('./user'));

module.exports = router;
