export function addEdge(edge) {
    edge._in = this.findVertexById(edge._in);
    edge._out = this.findVertexById(edge._out);
  
    if (!(edge._in && edge._out))
      return Dagoba.error("That edge's " + (edge._in ? 'out' : 'in') + " vertex wasn't found");
  
    edge._out._out.push(edge);
    edge._in._in.push(edge);
    this.edges.push(edge);
  }
  
  export function findOutEdges(vertex) {
    return vertex._out;
  }
  
  export function findInEdges(vertex) {
    return vertex._in;
  }
  