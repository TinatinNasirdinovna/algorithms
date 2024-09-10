/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function (nums) {
    if(nums.length === 1) {
        return nums[0]
    }
  return nums[Math.floor(nums.sort().length / 2)]
};

