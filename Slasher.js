// Return the remaining elements of an array after chopping off n elements from the head.
// The head means the beginning of the array, or the zeroth index.
// slasher([1, 2, 3], 4) should return [].
// slasher(["burgers", "fries", "shake"], 1) should return ["fries", "shake"].
// Source: FreeCodeCamp

function slasher(arr, howMany) {
  if(arr.length < howMany || arr.length === 0) return [];
  return arr.slice(howMany);
}
