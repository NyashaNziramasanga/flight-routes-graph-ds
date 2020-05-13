const graph = require('../graph-algorithm/graphAlgorithm');

const routesCon = {
  /**
   * @desc  Build routes
   * @route GET /routes
   * **/
  async getRoutes(req, res, next) {
    // TODO: move airports and routes to DB
    // List of airports
    const airports = 'MEL SYD HBA ADL PER DRW'.split(' ');

    // List of routes
    const routes = [
      ['MEL', 'ADL'],
      ['SYD', 'HBA'],
      ['HBA', 'ADL'],
      ['PER', 'DRW'],
      ['MEL', 'SYD'],
      ['HBA', 'MEL'],
      ['SYD', 'HBA'],
      ['PER', 'HBA'],
      ['SYD', 'ADL'],
      ['DRW', 'SYD'],
    ];

    const result = await graph.buildGraph(airports, routes);

    res.send({
      success: true,
      routes: result,
    });
  },
};

module.exports = routesCon;
