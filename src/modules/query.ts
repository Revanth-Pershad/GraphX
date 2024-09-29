import { Vertex } from './vertex.js';
import { Graph } from './graph.js';

export class VertexQuery {
  private graph: Graph;
  private vertices: Set<Vertex>;

  constructor(graph: Graph, initialVertices: Set<Vertex>) {
    this.graph = graph;
    this.vertices = initialVertices;
  }

  // Gets incoming vertices for the current set of vertices
  public in(type: string | null = null): VertexQuery {
    const incomingVertices = new Set<Vertex>();

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
  public out(type: string | null = null): VertexQuery {
    const outgoingVertices = new Set<Vertex>();

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
  public getVertices(): Set<Vertex> {
    return this.vertices;
  }
}
