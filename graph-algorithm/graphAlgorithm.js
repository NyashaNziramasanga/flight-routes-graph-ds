const graphAlgorithm = {
  buildGraph(airports, routes) {
    // The graph
    const adjacencyList = new Map();

    // Add node to the graph with an empty array
    const addNode = (airport) => {
      adjacencyList.set(airport, []);
    };

    // Add edge, undirected
    const addEdge = (originAirport, destinationAirport) => {
      // Grab the origin airport and push it onto the adjacency list
      adjacencyList.get(originAirport).push(destinationAirport);
      adjacencyList.get(destinationAirport).push(originAirport);
    };

    // Create the Graph
    airports.forEach(addNode);
    routes.forEach((route) => addEdge(...route));

    // Show Adjacency list in console
    //  console.log('Graph1', adjacencyList);
    //  console.log('Graph2', routes);
    //  console.log('Graph2', airports);
    return routes;
  },
};

module.exports = graphAlgorithm;
