// src/edge.ts

import { Vertex } from './vertex';

export class Edge<TFrom, TTo> {
  id: number;
  from: Vertex<TFrom>;
  to: Vertex<TTo>;
  type: string;
  data: any;

  constructor(id: number, from: Vertex<TFrom>, to: Vertex<TTo>, type: string, data: any = {}) {
    this.id = id;
    this.from = from;
    this.to = to;
    this.type = type;
    this.data = data;
  }
}
