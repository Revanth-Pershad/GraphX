// graphManager.ts
import { Graph } from './modules/graph';

export class GraphManager {
  private static instance: GraphManager;
  private graphs: Map<string, Graph>;

  // Private constructor to prevent direct instantiation
  private constructor() {
    this.graphs = new Map<string, Graph>();
  }

  // Singleton instance access
  public static getInstance(): GraphManager {
    if (!GraphManager.instance) {
      GraphManager.instance = new GraphManager();
    }
    return GraphManager.instance;
  }

  // Method to create a new graph with a name identifier
  public createGraph(name: string, identifierClass: new () => any): void {
    if (this.graphs.has(name)) {
      throw new Error(`Graph with name "${name}" already exists.`);
    }
    const newGraph = new Graph(identifierClass);
    this.graphs.set(name, newGraph);
  }

  // Method to get a graph by its name
  public getGraph(name: string): Graph | null {
    return this.graphs.get(name) || null;
  }

  // Method to delete a graph by its name
  public deleteGraph(name: string): void {
    if (!this.graphs.has(name)) {
      throw new Error(`Graph with name "${name}" does not exist.`);
    }
    this.graphs.delete(name);
  }

  // Check if a graph exists by its name
  public graphExists(name: string): boolean {
    return this.graphs.has(name);
  }

  // Get all graph names
  public getAllGraphNames(): string[] {
    return Array.from(this.graphs.keys());
  }
}
