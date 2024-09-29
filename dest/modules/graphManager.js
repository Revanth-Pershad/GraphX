import { Graph } from './graph.js';
export class GraphManager {
    constructor() {
        this.graphs = new Map();
    }
    createGraph(graphId, identifierClass) {
        if (this.graphs.has(graphId)) {
            throw new Error("Graph with this ID already exists.");
        }
        this.graphs.set(graphId, new Graph(identifierClass));
    }
    deleteGraph(graphId) {
        if (!this.graphs.has(graphId)) {
            throw new Error("Graph with this ID does not exist.");
        }
        this.graphs.delete(graphId);
    }
    getGraph(graphId) {
        return this.graphs.get(graphId);
    }
}
