// index.js
import { GraphX } from './modules/main'; // Get the main Graph
 // Methods to add, delete, update, read vertices in the graph
// The query processing methods

GraphX.G.addVertex = addVertex;
GraphX.G.findVertexById = findVertexById;
GraphX.G.addEdge = addEdge;
GraphX.G.findOutEdges = findOutEdges;
GraphX.G.findInEdges = findInEdges;
GraphX.query = query;
GraphX.Q.run = runQuery;
// and so on
7
export default GraphX;
