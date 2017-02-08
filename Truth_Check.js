// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
// Source: FreeCodeCamp

function truthCheck(collection, pre) {
  return collection.reduce((res, curr) => {
    if(!curr[pre] && res){
      res = false;
    }
    return res;
  }, true)
}

// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

