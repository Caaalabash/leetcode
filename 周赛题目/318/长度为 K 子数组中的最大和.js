// 比赛时傻逼代码
function maximumSubarraySum(nums, k) {
    const n = nums.length
    let maxSum = 0

    const preSum = [nums[0]]
    for (let i = 1; i < n; i++) {
        preSum.push(preSum[i - 1] + nums[i])
    }

    const repeat = new Array(n - k + 1).fill(false)
    const map = new Map()
    for (let m = 0; m <= k - 1; m++) {
        if (map.has(nums[m])) {
            map.set(nums[m], map.get(nums[m]) + 1)
        } else {
            map.set(nums[m], 1)
        }
    }
    repeat[0] = map.size === k
    for (let i = 1; i <= n - k; i++) {
        if (map.has(nums[i - 1])) {
            if (map.get(nums[i - 1]) === 1) {
                map.delete(nums[i - 1])
            } else {
                map.set(nums[i - 1], map.get(nums[i - 1]) - 1)
            }
        }
        if (map.has(nums[i - 1 + k])) {
            map.set(nums[i - 1 + k], map.get(nums[i - 1 + k]) + 1)
        } else {
            map.set(nums[i - 1 + k], 1)
        }
        repeat[i] = map.size === k
    }


    let i = 0
    let j = k - 1
    while (j < n) {
        if (repeat[i] === true) {
            maxSum = Math.max(maxSum, preSum[j] - (i === 0 ? 0 : preSum[i - 1]))
        }
        i++
        j++
    }
    return maxSum
}

// 简单滑动窗口罢了: 始终维护一个范围，当范围中没有重复元素且长度等于k时，对累加的和进行维护
// 注意不是维护一个大小为k的窗口
function maximumSubarraySum(nums, k) {
    let ans = 0
    let i = 0
    let j = 0
    // 记录遍历到的字符串所在位置，用于判断是否有重复元素
    const map = new Map()
    let sum = 0

    while (j < nums.length) {
        while (map.has(nums[j]) && map.get(nums[j]) >= i) {
            sum -= nums[i++]
        }
        map.set(nums[j], j)
        sum += nums[j]
        if (j - i + 1 === k) {
            ans = Math.max(ans, sum)
            sum -= nums[i++]
        }
        j++
    }
    return ans
}
