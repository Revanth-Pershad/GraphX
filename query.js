export function query(graph) {
    var query = Object.create(Dagoba.Q);
    query.graph = graph;
    query.state = [];
    query.program = [];
    query.gremlins = [];
    return query;
  }
  
  export function runQuery() {
    this.program = Dagoba.transform(this.program);
    // Rest of the run method...
    // The loop that handles query processing
  }
  
  export function addPipetype(name, fun) {
    Dagoba.Pipetypes[name] = fun;
    Dagoba.Q[name] = function () {
      return this.add(name, [].slice.apply(arguments));
    };
  }
  
  export function getPipetype(name) {
    var pipetype = Dagoba.Pipetypes[name];
    if (!pipetype) Dagoba.error('Unrecognized pipe type: ' + name);
    return pipetype || Dagoba.fauxPipetype;
  }
  