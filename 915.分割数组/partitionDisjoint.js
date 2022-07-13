// 2 <= nums.length <= 10^5
// RANK 1500
function partitionDisjoint(nums) {
    // 维护三个变量：当前遍历的最大值、可能解的最大值、可能解的结束索引
    let max = nums[0]
    let leftMax = nums[0]
    let pos = 0
    for (let i = 1; i < nums.length; i++) {
        max = Math.max(max, nums[i])
        if (nums[i] < leftMax) {
            pos = i
            leftMax = max
        }
    }
    return pos + 1
}