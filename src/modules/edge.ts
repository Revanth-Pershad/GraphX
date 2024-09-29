import { Vertex } from './vertex.js';

export class Edge {
  id: number;
  from: any;
  to: any;
  type: string;

  constructor(id: number, from: any, to: any, type: string) {
    this.id = id;
    this.from = from;
    this.to = to;
    this.type = type;
  }
}
