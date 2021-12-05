/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function (nums) {
  let prevSum = nums[0];
  let maxSum = nums[0];
  const len = nums.length;
  for (let i = 1; i < len; i++) {
    const sumWithPrev = prevSum + nums[i];
    prevSum = sumWithPrev > nums[i] ? sumWithPrev : nums[i];
    maxSum = prevSum > maxSum ? prevSum : maxSum;
  }
  return maxSum;
};

console.log(maxSubArray([-2, 1, -2, 10]));
