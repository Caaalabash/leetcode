// 排序+双指针：O(nlogn)
function distinctAverages(nums) {
    const n = nums.length
    const result = new Set()
    nums.sort((a, b) => a < b ? -1 : 1)

    let left = 0
    let right = n - 1

    while (left < right) {
        result.add((nums[left] + nums[right]) / 2)
        left++
        right--
    }

    return result.size
}