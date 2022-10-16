var findMaxK = function(nums) {
    let k = -1
    const set = new Set(nums)
    for (const num of nums) {
        if (num > 0 && set.has(-num) && num > k) {
            k = num
        }
    }
    return k
}