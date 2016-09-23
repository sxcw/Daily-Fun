// Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
// Source: FreeCodeCamp

function sumFibs(num) {
  // get all fibs
  // add odd nums
  function fib (num) {
    var fibs = [];
    if (num <= 2) {
      return 1;
    } else {
      return fib(num-1) + fib(num-2)
    }
  }
  
}

sumFibs(4);
