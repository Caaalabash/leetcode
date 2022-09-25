// 这题倒是一眼看出求的是"数组中的最大值最多连续出现了几次"
// 但是人太脑瘫了。。。耗费1小时？你是人吗？
function longestSubarray(nums) {
    const n = nums.length
    let curMax = nums[0]
    let count = 1
    let result = count
    for (let i = 1; i < n; i++) {
        if (nums[i] > curMax) {
            count = 1
            curMax = nums[i]
            result = 1
        } else if (curMax === nums[i]) {
            count++
            result = Math.max(result, count)
        } else {
            count = 0
        }
    }
    return result
}

function longestSubarray(nums) {
    const max = Math.max(nums)
    let ans = 1
    let count = 0
    for (const num of nums) {
        if (num === max) count++
        else {
            ans = Math.max(ans, count)
            count = 0
        }
    }
    ans = Math.max(ans, count)
    return ans
}