// Finders Keepers
// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).
// findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
// Source: FreeCodeCamp

function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if(func(arr[i])) {
      return arr[i];
    }
  }
}

//findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });