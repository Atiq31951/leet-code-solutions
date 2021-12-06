var intersect = function (nums1, nums2) {
  const len1 = nums1.length;
  const len2 = nums2.length;
  nums1.sort();
  nums2.sort();
  let i = 0;
  let j = 0;
  let matchedArr = [];

  let start = 0;

  for (let i = 0; i < len1; i++) {
    for (let j = start; j < len2; j++) {
      if (nums1[i] === nums2[j]) {
        start = j + 1;
        matchedArr.push(nums1[i]);
        break;
      }
    }
  }
  return matchedArr;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));
