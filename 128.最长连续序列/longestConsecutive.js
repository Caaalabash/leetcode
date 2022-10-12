// 找出数字连续的最长序列，不要求序列元素在原始数组中有序
// 使用O(n)的时间复杂度
function longestConsecutive(nums) {
    let result = 0
    const set = new Set(nums)
    for (const num of set) {
        // 如果 set 不包含 num - 1，说明 num 可以视为一个起始点
        if (!set.has(num - 1)) {
            let count = 1
            let val = num
            while (set.has(val + 1)) {
                count++
                val++
            }
            result = Math.max(result, count)
        }
    }
    return result
}