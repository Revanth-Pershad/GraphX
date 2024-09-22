"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphManager = void 0;
const graph_1 = require("./modules/graph");
class GraphManager {
    constructor() {
        this.graphs = new Map();
    }
    createGraph(graphId, identifierClass) {
        if (this.graphs.has(graphId)) {
            throw new Error("Graph with this ID already exists.");
        }
        this.graphs.set(graphId, new graph_1.Graph(identifierClass));
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
exports.GraphManager = GraphManager;
