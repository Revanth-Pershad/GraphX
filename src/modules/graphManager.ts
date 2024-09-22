import { Graph } from './graph';

export class GraphManager {
  private graphs: Map<string, Graph>;

  constructor() {
    this.graphs = new Map<string, Graph>();
  }

  createGraph(graphId: string, identifierClass: new () => any): void {
    if (this.graphs.has(graphId)) {
      throw new Error("Graph with this ID already exists.");
    }
    this.graphs.set(graphId, new Graph(identifierClass));
  }

  deleteGraph(graphId: string): void {
    if (!this.graphs.has(graphId)) {
      throw new Error("Graph with this ID does not exist.");
    }
    this.graphs.delete(graphId);
  }

  getGraph(graphId: string): Graph | undefined {
    return this.graphs.get(graphId);
  }
}
