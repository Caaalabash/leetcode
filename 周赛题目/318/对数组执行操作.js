// 比赛傻逼代码
function applyOperations(nums) {
    const n = nums.length
    const result = []
    let zeroCount = 0
    for (let i = 0; i < n - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2
            nums[i + 1] = 0
        }
        if (nums[i] === 0) {
            zeroCount++
        } else {
            result.push(nums[i])
        }
    }
    result.push(nums[n - 1], ...new Array(zeroCount).fill(0))
    return result
}

// 原地修改
function applyOperations(nums) {
    const n = nums.length
    let zeroCount = 0
    for (let i = 0; i < n - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2
            nums[i + 1] = 0
        }
    }
    for (let i = 0; i < n; i++) {
        if (nums[i] !== 0) {
            nums[zeroCount] = nums[i]
            zeroCount++
        }
    }
    for (let i = zeroCount; i < n; i++) {
        nums[i] = 0
    }
    return nums
}