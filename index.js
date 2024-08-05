// index.js
import { Dagoba } from './core.js';
import { addVertex, findVertexById } from './vertex.js';
import { addEdge, findOutEdges, findInEdges } from './edge.js';
import { query, runQuery, addPipetype, getPipetype } from './query.js';
import { objectFilter, error } from './utils.js';

Dagoba.G.addVertex = addVertex;
Dagoba.G.findVertexById = findVertexById;
Dagoba.G.addEdge = addEdge;
Dagoba.G.findOutEdges = findOutEdges;
Dagoba.G.findInEdges = findInEdges;
Dagoba.query = query;
Dagoba.Q.run = runQuery;
Dagoba.addPipetype = addPipetype;
Dagoba.getPipetype = getPipetype;
Dagoba.objectFilter = objectFilter;
Dagoba.error = error;

export default Dagoba;
