var countSubarrays = function(nums, minK, maxK) {
    let result = 0
    let illegal = -1
    let left = -1
    let right = -1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < minK || nums[i] > maxK) {
            illegal = i
        }
        if (nums[i] === minK) left = i
        if (nums[i] === maxK) right = i
        if (left !== -1 && right !== -1 && Math.min(left, right) > illegal) {
            result += Math.min(left, right) - illegal
        }
    }
    return result
}