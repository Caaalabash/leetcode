// 有 x 个元素 >= x，暴力计数O(c)
function specialArray(nums) {
    const record = new Array(1001).fill(0)
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j <= nums[i]; i++) {
            record[j]++
        }
    }
    for (let i = 0; i < record.length; i++) {
        if (i === record[i]) return i
    }
    return -1
}