export class Vertex {
    constructor(id, data) {
        this.id = id;
        this.data = data;
        this.incomingEdges = [];
        this.outgoingEdges = [];
    }
}
