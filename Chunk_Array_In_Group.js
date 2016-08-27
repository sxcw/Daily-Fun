// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array. 
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
// Source: FreeCodeCamp

function chunkArrayInGroups(arr, size) {
  if(arr.length === 0) return [];
  if(size <= 1) return arr;
  var result = [],temp = [], count = 0, arrCopy = arr.slice();
  for(var i = 0; i < arr.length; i++) {
    temp.push(arrCopy.shift());
    count++;
    if(count === size || arrCopy.length === 0 && temp.length > 0) {
      result.push(temp);
      count = 0;
      temp = [];
    }
  }
  return result;
}
