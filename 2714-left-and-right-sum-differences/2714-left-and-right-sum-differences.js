/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    const answer = [];
    let totalSum = nums.reduce((a, b) => a + b, 0); 
    let leftSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        const rightSum = totalSum - leftSum - nums[i];
        answer.push(Math.abs(leftSum - rightSum)); 
        leftSum += nums[i]; 
    }
    
    return answer;
};