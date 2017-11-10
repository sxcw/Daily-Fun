// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
// Note:
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.
// Source: https://leetcode.com
const merge = function(nums1, m, nums2, n) {
    let ind = 0;
    for(let i = m ; i < m + n ; i++){
            nums1[i] = nums2[ind];
            ind++;
    }

    nums1 = nums1.sort((a,b) => a-b);
};
