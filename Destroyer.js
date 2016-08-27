// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
// destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
// destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
// Source: FreeCodeCamp

function destroyer(arr) {
  var targets = Array.prototype.slice.call(arguments, 1);
  return arr.reduce((result,curr) => {
    if(targets.indexOf(curr) === -1) {
      result.push(curr);
    }
    return result;
  },[])
  return arr;
}