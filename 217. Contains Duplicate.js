/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  nums.sort();
  let len = nums?.length || 0;

  if (len === 1 || !len) {
    return false;
  }
  for (let i = 0; i < len - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};
