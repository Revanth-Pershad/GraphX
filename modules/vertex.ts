import { Edge } from './edge';

export class Vertex {
  id: any;
  data: any;
  incomingEdges: Edge[];
  outgoingEdges: Edge[];

  constructor(id: any, data: any) {
    this.id = id;
    this.data = data;
    this.incomingEdges = [];
    this.outgoingEdges = [];
  }
}
