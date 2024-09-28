import { Vertex } from "./vertex";
import { Edge } from "./edge";

export class Graph {
  vertices: Map<any, Vertex>;
  private identifierClass: new () => any;

  constructor(identifierClass: new () => any) {
    this.identifierClass = identifierClass;
    this.vertices = new Map<any, Vertex>();
  }

  addVertex(id: any, data: any): void {
    if (this.vertices.has(id)) {
      throw new Error("Vertex with this identifier already exists.");
    }
    const vertex = new Vertex(id, data);
    this.vertices.set(id, vertex);
  }

  updateVertex(id: any, data: any): void {
    const vertex = this.vertices.get(id);
    if (!vertex) {
      throw new Error("Vertex with this identifier does not exist.");
    }
    vertex.data = data;
  }

  deleteVertex(id: any): void {
    const vertex = this.vertices.get(id);
    if (!vertex) {
      throw new Error("Vertex with this identifier does not exist.");
    }

    // Remove incoming edges
    vertex.incomingEdges.forEach((edge) => {
      const fromVertex = this.vertices.get(edge.from);
      if (fromVertex) {
        fromVertex.outgoingEdges = fromVertex.outgoingEdges.filter(e => e.to !== id);
      }
    });

    // Remove outgoing edges
    vertex.outgoingEdges.forEach((edge) => {
      const toVertex = this.vertices.get(edge.to);
      if (toVertex) {
        toVertex.incomingEdges = toVertex.incomingEdges.filter(e => e.from !== id);
      }
    });

    // Delete the vertex
    this.vertices.delete(id);
  }

  addEdge(fromId: any, toId: any, type: any | null = null): void {
    const fromVertex = this.vertices.get(fromId);
    const toVertex = this.vertices.get(toId);

    if (!fromVertex || !toVertex) {
      throw new Error("Both vertices must exist in the graph to add an edge.");
    }

    const edge = new Edge(Math.random(), fromId, toId, type || "NULL");

    // Add the edge to the outgoing and incoming edges
    fromVertex.outgoingEdges.push(edge);
    toVertex.incomingEdges.push(edge);
  }
}