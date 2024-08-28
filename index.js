// index.js
import { GraphX } from './core.js';
import { addVertex, findVertexById } from './vertex.js';
import { addEdge, findOutEdges, findInEdges } from './edge.js';
import { query, runQuery, addPipetype, getPipetype } from './query.js';
import { objectFilter, error } from './utils.js';

GraphX.G.addVertex = addVertex;
GraphX.G.findVertexById = findVertexById;
GraphX.G.addEdge = addEdge;
GraphX.G.findOutEdges = findOutEdges;
GraphX.G.findInEdges = findInEdges;
GraphX.query = query;
GraphX.Q.run = runQuery;
GraphX.addPipetype = addPipetype;
GraphX.getPipetype = getPipetype;
GraphX.objectFilter = objectFilter;
GraphX.error = error;

export default GraphX;
