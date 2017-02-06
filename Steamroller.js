// Flatten a nested array. You must account for varying levels of nesting.
// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
// steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
// Source: FreeCodeCamp

function steamrollArray(arr) {
  return arr.reduce((res,curr) => {
    if(Array.isArray(curr)) {
    return res.concat(steamrollArray(curr));
    }
    return res.concat(curr);
  },[])
}
