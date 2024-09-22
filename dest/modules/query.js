export class VertexQuery {
    constructor(graph, initialVertices) {
        this.graph = graph;
        this.vertices = initialVertices;
    }
    // Gets incoming vertices for the current set of vertices
    in(type = null) {
        const incomingVertices = new Set();
        this.vertices.forEach(vertex => {
            vertex.incomingEdges.forEach(edge => {
                if (!type || edge.type === type) {
                    const fromVertex = this.graph.vertices.get(edge.from);
                    if (fromVertex) {
                        incomingVertices.add(fromVertex);
                    }
                }
            });
        });
        return new VertexQuery(this.graph, incomingVertices);
    }
    // Gets outgoing vertices for the current set of vertices
    out(type = null) {
        const outgoingVertices = new Set();
        this.vertices.forEach(vertex => {
            vertex.outgoingEdges.forEach(edge => {
                if (!type || edge.type === type) {
                    const toVertex = this.graph.vertices.get(edge.to);
                    if (toVertex) {
                        outgoingVertices.add(toVertex);
                    }
                }
            });
        });
        return new VertexQuery(this.graph, outgoingVertices);
    }
    // Returns the current set of vertices
    getVertices() {
        return this.vertices;
    }
}
