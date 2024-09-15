// src/vertex.ts

import { Edge } from './edge';

export class Vertex<T> {
  id: number;
  data: T;
  incomingEdges: Edge<any, T>[];
  outgoingEdges: Edge<T, any>[];

  constructor(id: number, data: T) {
    this.id = id;
    this.data = data;
    this.incomingEdges = [];
    this.outgoingEdges = [];
  }
}
