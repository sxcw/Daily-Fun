// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
// largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27,5,39,1001].
// Source: FreeCodeCamp

function largestOfFour(arr) {
  return arr.reduce((result,nums) => {
    result.push(Math.max.apply(null,nums));
    return result;
  },[]);
}





