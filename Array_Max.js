// Array Max
// Given an array of negative/positive integers, find the largest element. DO NOT use Math.max
// input: [20,30,10], output: 30

function max (numbers) {
  return numbers.reduce((res,curr) => res > curr? res: curr);
}