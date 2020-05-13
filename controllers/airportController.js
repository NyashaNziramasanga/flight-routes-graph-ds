const Airports = require('../models/Airport');

const airportCon = {
  /**
   * @desc  Get all airport routes
   * @route GET /airport
   * **/
  async getAirport(req, res, next) {
    const airport = await Airports.find();

    res.send({
      success: true,
      airport: airport,
    });
  },

  /**
   * @desc  Create a airport in mongoDB
   * @route POST /airport
   * **/
  async createAirport(req, res, next) {
    // TODO: Error check for duplicates
    //  Airports.findOne({ airport: req.body });

    const airport = await Airports.create(req.body);

    res.send({
      success: true,
      airport: airport,
    });
  },
};

module.exports = airportCon;
