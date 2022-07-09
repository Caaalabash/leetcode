function minSumSquareDiff(nums1, nums2, k1, k2) {
    // 求出diffArr并排序
    let k = k1 + k2
    const n = nums1.length
    const diffArr = []
    for (let i = 0; i < n; i++) {
        diffArr.push(Math.abs(nums1[i] - nums2[i]))
    }
    // 处理越界case
    diffArr.push(0)
    diffArr.sort((a, b) => a < b ? 1 : -1)
    // 贪心：差值大的优先修改，收益必然比差值小的高，所以就不停的修改最大值，直到追平次值
    let repeatCount = 1
    let index = 0
    while (k) {
        if (k >= repeatCount * (diffArr[index] - diffArr[index + 1])) {
            k -= (repeatCount * (diffArr[index] - diffArr[index + 1]))
            if (k === 0) {
                for (let i = 0; i <= index; i++) {
                    diffArr[i] = diffArr[index + 1]
                }
            }
            index++
            repeatCount++
        } else {
            const avg = Math.floor(k / repeatCount)
            const remain = k - avg * repeatCount

            for (let i = 0; i <= index; i++) {
                diffArr[i] = diffArr[index] - avg
            }
            for (let i = 0; i < remain; i++) {
                diffArr[i] -= 1
            }
            break
        }
    }

    return diffArr.reduce((acc, item) => acc += Math.pow(Math.max(0, item), 2), 0)
}