// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.
// findEvenIndex([1,2,3,4,3,2,1]),3.  findEvenIndex([1,100,50,-51,1,1]),1. [20,10,30,10,10,15,35]),3. [1,2,3,4,5,6]),-1.
// Source: Codewar

function findEvenIndex(arr) {
  for(let i = 1; i < arr.length - 1; i++) {
    let left = arr.slice(0,i).reduce((sum,curr) => sum + curr); 
    let right = arr.slice(i+1).reduce((sum,curr) => sum + curr);
    if(left === right) {
      return i;
    }
  }
  return -1;
}