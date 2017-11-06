// Write a function to find the longest common prefix string amongst an array of strings.
// Source: https://leetcode.com

// method 1
const longestCommonPrefix = strs => {
  if (strs.length === 0) {
      return '';
  } else if (strs.length === 1) {
      return strs[0];
  }

  const arr = strs.sort();
  let ans = arr.shift();

  arr.forEach((curr, ind, array) => {
      while (curr.substring(0, ans.length) !== ans && ans.length > 0) {
          curr = curr.substring(0, ans.length -1);
          ans = ans.substring(0, ans.length -1)
      }
  })
  return ans;
};

//method 2
const longestCommonPrefix = strs => {
  let ans = strs[0] || '';
  for (let i = 1; i < strs.length; i++) {
      for (let j = 0; j <= strs[i].length; j++) {
          if (ans[j] !== strs[i][j]) {
              ans = ans.slice(0, j);
              break;
          }
      }
  }
  return ans;
};