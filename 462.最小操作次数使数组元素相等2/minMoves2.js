// https://leetcode.cn/problems/minimum-moves-to-equal-array-elements-ii/solution/by-fuxuemingzhu-13z3/
// 假设经过移动以后，所有的数字最终都等于target
// 那么target取值有两种情况：在数组取值范围外、在数组取值范围内
// 情况一：在数组取值范围外
//   把所有数字移动到target一定比移动到边界的次数更多
// 情况二：在数组取值范围内
//   得出target必须是中位数的结论
// 这道题的核心在于：得出中位数结论、快速选择算法

// 做法一：将nums排序，取得中间的数字，然后计算移动次数，时间复杂度是O(nlogn)，空间复杂度O(1)
function minMoves2(nums) {
    nums.sort((a, b) => a < b ? -1 : 1)
    const n = nums.length
    const mid = nums[Math.floor(n / 2)]
    let result = 0
    for (const num of nums) {
        result += Math.abs(num - mid)
    }
    return result
}

// TODO: 快速选择算法将时间复杂度降低到O(n)