// Recursion with Destructuring, Do not use any array helpers! 
// double([1,2,3]) => [2,4,6]
// Source: Udemy

const numbers = [1, 2, 3];
const double = ([number, ...rest]) => {
  return !number ? [] : [number * 2, ...double(rest)];
}