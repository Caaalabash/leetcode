// 数据规模1e5
// 如果存在多个满足条件的元素，只需要返回 最小 的一个，对于这个条件来说，不用Map更方便一些
function mostFrequentEven(nums) {
    const countMap = {}
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 1) continue
        if (!(nums[i] in countMap)) countMap[nums[i]] = 0
        countMap[nums[i]]++
    }
    let max = -1
    let maxCount = 0
    for (const entry of Object.entries(countMap)) {
        if (entry[1] > maxCount) {
            max = entry[0]
            maxCount = entry[1]
        }
    }
    return max
}