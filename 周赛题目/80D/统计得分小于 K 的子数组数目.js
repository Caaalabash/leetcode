function countSubarrays(nums, k) {
    const n = nums.length
    const sumArr = new Array(n + 1).fill(0)
    let result = 0

    for (let i = 0; i < n; i++) {
        sumArr[i + 1] = sumArr[i] + nums[i]
    }
    for (let i = 0; i < n; i++) {
        if (nums[i] >= k) {
            continue
        }
        let left = i
        let right = n - 1
        while (left < right) {
            const mid = (left + right + 1) >>> 1
            const product = (mid - i + 1) * (sumArr[mid + 1] - sumArr[i])
            if (product < k) {
                left = mid
            } else {
                right = mid - 1
            }
        }

        result += (left - i + 1)
    }
    return result
}