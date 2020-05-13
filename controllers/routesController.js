// const Airports = require('../models/Airport');

const routesCon = {
  /**
   * @desc  Build routes
   * @route GET /airport
   * **/
  async getRoutes(req, res, next) {
    // const airport = await Airports.find();

    res.send({
      success: true,
      // airport: airport,
    });
  },
};

module.exports = routesCon;
