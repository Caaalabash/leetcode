// 两个等长数组，交换或不叫唤任意一个片段，求最大和

// O(n^2)超时
// 假设交换区间[i,j]获得最大值，有
// result = Math.max(
//      preSum1[i - 1] + preSum1[n - 1] - preSum1[j] + preSum2[j] - preSum2[i - 1],
//      preSum2[i - 1] + preSum2[n - 1] - preSum2[j] + preSum1[j] - preSum1[i - 1]
// )
function maximumsSplicedArray(nums1, nums2) {
    const n = nums1.length
    const preSum1 = [nums1[0]]
    const preSum2 = [nums2[0]]
    for (let i = 1; i < n; i++) {
        preSum1[i] = preSum1[i - 1] + nums1[i]
        preSum2[i] = preSum2[i - 1] + nums2[i]
    }
    let result = Math.max(preSum1[n - 1], preSum2[n - 1])
    for (let i = 0; i < n; i++) {
        for (let j = n - 1; j >= i; j--) {
            const leftPart1 = (i === 0 ? 0 : preSum1[i - 1])
            const leftPart2 = (i === 0 ? 0 : preSum2[i - 1])
            const midPart1 = preSum1[j] - (i === 0 ? 0 : preSum1[i - 1])
            const midPart2 = preSum2[j] - (i === 0 ? 0 : preSum2[i - 1])
            const rightPart1 = preSum1[n - 1] - preSum1[j]
            const rightPart2 = preSum2[n - 1] - preSum2[j]
            result = Math.max(
                result,
                leftPart1 + midPart1 + rightPart1,
                leftPart2 + midPart2 + rightPart2,
                leftPart1 + midPart2 + rightPart1,
                leftPart2 + midPart1 + rightPart2
            )
        }
    }
    return result
}

maximumsSplicedArray([60,60,60], [10,90,10])