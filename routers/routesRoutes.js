const express = require('express');
const router = express.Router();

const airport = require('../controllers/routesController');

router.get('/', airport.getRoutes);

module.exports = router;
