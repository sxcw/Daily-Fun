// Array Middle
// Given an array of negative/positive integers, return the element in the center position of the array.
// If the array has an even number of elements, return the average of the two middle elements instead.
// input: [10,20,30,40], output: 25; input: [1,2,3], output: 2

function middle (numbers) {
 const mid = Math.floor(numbers.length/2);
 if(numbers.length % 2) {
   return numbers[mid];
 } else {
   return (numbers[mid] + numbers[mid-1])/2;
 }
}