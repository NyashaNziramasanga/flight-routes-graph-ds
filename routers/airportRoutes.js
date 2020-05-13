const express = require('express');
const router = express.Router();

const airport = require('../controllers/airportController');

router.get('/', airport.getAirport);
router.post('/', airport.createAirport);

module.exports = router;
