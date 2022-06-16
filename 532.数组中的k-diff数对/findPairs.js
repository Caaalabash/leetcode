// 可以排序做，但是要O(nlogn)的时间复杂度
// 比较好的做法是哈希表
function findPairs(nums, k) {
    const visited = new Set()
    const result = new Set()

    for (let i = 0; i < nums.length; i++) {
        // 将数对的较小值放入result
        if (visited.has(nums[i] - k)) {
            result.add(nums[i] - k)
        }
        if (visited.has(nums[i] + k)) {
            result.add(nums[i])
        }
        visited.add(nums[i])
    }

    return result.size
}
