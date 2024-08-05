// utils.js
export function objectFilter(thing, filter) {
    for (var key in filter)
      if (thing[key] !== filter[key]) return false;
    return true;
  }
  
  export function error(msg) {
    console.log(msg);
    return false;
  }
  
  // Other utility functions like makeGremlin, gotoVertex, etc.
  