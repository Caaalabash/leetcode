var countDistinctIntegers = function(nums) {
    const result = new Set(nums)
    for (const num of nums) {
        const reverseNum = Number(String(num).split('').reverse().join(''))
        result.add(reverseNum)
    }
    return result.size
}