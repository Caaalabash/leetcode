// 给定一个二进制数组 nums , 找到含有相同数量的 0 和 1 的最长连续子数组，并返回该子数组的长度。
// 1 <= nums.length <= 105

// 朴素的思路：
// 1.将 0 转换为 -1，求出前缀和数组preSum
// 2.更新width的两种情况
//   2.1. preSum[i] = 0
//   2.2. preSum[i] = preSum[j] (因此需要一个哈希表)
function findMaxLength(nums) {
    // 计算前缀和 以及 将 0 转换为 -1
    const toMinusOne = val => val === 0 ? -1 : val
    const preSum = [toMinusOne(nums[0])]
    for (let i = 1; i < nums.length; i++) {
        preSum[i] = preSum[i - 1] + toMinusOne(nums[i])
    }
    // 通过 hashmap 记录前缀和的值出现的首个位置
    const map = {}
    let width = 0
    for (let i = 0; i < preSum.length; i++) {
        if (preSum[i] === 0) {
            width = Math.max(width, i + 1)
        } else if (!(preSum[i] in map)) {
            map[preSum[i]] = i
        } else {
            width = Math.max(width, i - map[preSum[i]])
        }
    }
    return width
}