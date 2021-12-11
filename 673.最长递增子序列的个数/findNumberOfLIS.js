// 最长递增子序列的个数
// 需要找到整个nums中最长子序列的长度，以及其个数，用2个dp数组完成

// 设length[i]代表以nums[i]结尾的最长上升子序列的长度
// 设count[i]代表以nums[i]结尾的最长上升子序列的个数
// 对于最长子序列长度的递推方程不难想到：
// length[i] = Max(length[j]) + 1 (0 <= j < i && nums[j] < nums[i]

// length[nums.length - 1]不一定是最大值：因为定义只是记录以nums[i]结尾的最大值
// 因此额外使用 maxLen, result 2个变量记录全局的最大长度以及结果
function findNumberOfLIS(nums) {
    const l = nums.length
    const length = new Array(l).fill(1)
    const count = new Array(l).fill(1)
    let maxLen = 0
    let result = 0

    for (let i = 0; i < l; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                if (length[j] + 1 > length[i]) {
                    length[i] = length[j] + 1
                    count[i] = count[j]
                } else if (length[j] + 1 === length[i]) {
                    count[i] += count[j]
                }
            }
        }
        if (length[i] > maxLen) {
            maxLen = length[i]
            result = count[i]
        } else if (length[i] === maxLen) {
            result += count[i]
        }
    }
    return result
}

// 总结: dp[i]为以nums[i]结尾的XXXX