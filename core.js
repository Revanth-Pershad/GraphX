export const GraphDB = {};
GraphDB.G = {};

GraphDB.graph = function(V, E) { 
  var graph = Object.create(GraphDB.G);
  graph.edges = [];
  graph.vertices = [];
  graph.vertexIndex = {};
  graph.autoid = 1;
  if (Array.isArray(V)) graph.addVertices(V);
  if (Array.isArray(E)) graph.addEdges(E);
  return graph;
};
