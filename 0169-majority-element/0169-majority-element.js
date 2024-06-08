/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function (nums) {
  const objCount = {};
  const res = Math.floor(nums.length / 2);
  for (let num of nums) {
      if (objCount[num] === undefined) {
        objCount[num] = 1;
      } else {
          objCount[num]++;
      }
      if (objCount[num] > res) {
          return num;
      }
  }
};
