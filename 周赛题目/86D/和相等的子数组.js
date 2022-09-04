function findSubarrays(nums) {
    const cache = new Set()
    for (let i = 0; i < nums.length - 1; i++) {
        const sum = nums[i] + nums[i + 1]
        if (cache.has(sum)) return true
        cache.add(sum)
    }
    return false
}