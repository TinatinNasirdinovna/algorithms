/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
      let arr = []
      for(let i = 0; i < nums.length; i++) {
         for(let k = i+1; k < nums.length; k++) {
          nums[i] + nums[k]  === target ? arr.push(i,k) : arr.push()      
         }
      }
    return arr
};
