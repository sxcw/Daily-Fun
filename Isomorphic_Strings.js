// Given two strings s and t, determine if they are isomorphic.

// Two strings are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

// For example,
// Given "egg", "add", return true.

// Given "foo", "bar", return false.

// Given "paper", "title", return true.

// Note:
// You may assume both s and t have the same length.
// Source: https://leetcode.com
const isIsomorphic = function(s, t) {
  const mpS = {}, mpT = {};
  for (let i = 0; i < s.length; i++) {
    let valS = s[i], valT = t[i];

    if (mpS.hasOwnProperty(valS) && mpS[valS] !== valT) {
        return false;
    } else {
        mpS[valS] = valT;
    }

    if (mpT.hasOwnProperty(valT) && mpT[valT] !== valS) {
        return false;
    } else {
        mpT[valT] = valS;
    }
  }
  return true;
};
