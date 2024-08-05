export function addVertex(vertex) {
    if (!vertex._id) vertex._id = this.autoid++;
    else if (this.findVertexById(vertex._id))
      return Dagoba.error('A vertex with id ' + vertex._id + ' already exists');
  
    this.vertices.push(vertex);
    this.vertexIndex[vertex._id] = vertex;
    vertex._out = [];
    vertex._in = [];
    return vertex._id;
  }
  
  export function findVertices(args) {
    if (typeof args[0] == 'object') return this.searchVertices(args[0]);
    else if (args.length == 0) return this.vertices.slice();
    else return this.findVerticesByIds(args);
  }
  
  export function findVertexById(vertex_id) {
    return this.vertexIndex[vertex_id];
  }
  