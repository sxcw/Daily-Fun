// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
// Source: https://www.udemy.com/coding-interview-bootcamp-algorithms-and-data-structure

//method 1
function pyramid(n) {
  if (n === 0) {
    return '';
  }

  for (let i = 0; i < n; i++) {
    let res = '';
    let length = 2*(n-1) +1, mid = Math.floor(length/2);
    for (let j = 0; j < length; j++) {
      if (j >= mid - i && j <= mid + i) {
        res += '#';
      } else {
        res += ' ';
      }
    }
    console.log(res);
  }
}

//method 2
function pyramid(n, row = 0, level = '') {
  if (row === n) { return; }
  if (level.length === 2 * n -1) {
    console.log(level);
    pyramid(n, row + 1);
    return;
  }

  let length = 2 * n -1, mid = Math.floor(length/2);
  let add = '';
  if (level.length <= mid + row && level.length >= mid - row) {
    add += '#';
  } else {
    add += ' ';
  }
  pyramid(n, row, level + add);
}
