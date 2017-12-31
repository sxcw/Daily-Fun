// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
// Source: https://www.udemy.com/coding-interview-bootcamp-algorithms-and-data-structure

function matrix(n) {
  const res =[];
  for(let i = 0; i < n; i++) {
    res.push([]);
  }

  let counter = 1;
  let startC = 0;
  let endC = n-1;
  let startR = 0;
  let endR = n-1;

  while (startR <= endR && startC <= endC) {
    // going right
    for (let i = startC; i <= endC; i++){
      res[startR][i] = counter;
      counter++;
    }
    startR++;

    //going down
    for (let i = startR; i <= endR; i++) {
      res[i][endC] = counter;
      counter++;
    }
    endC--;

    //going left
    for (let i = endC; i >= startC; i--) {
      res[endR][i] = counter;
      counter++;
    }
    endR--;

    //going up
    for (let i = endR; i >= startR; i--) {
      res[i][startC] = counter;
      counter++;
    }
    startC++;
  }

  return res;
}
