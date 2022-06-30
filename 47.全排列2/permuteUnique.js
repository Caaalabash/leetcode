// 时间/空间复杂度同 46
function permuteUnique(nums) {
    nums.sort((a, b) => a < b ? - 1 : 1)
    const result = []
    const N = nums.length
    const used = new Array(N).fill(false)

    const backTrack = (combine) => {
        if (combine.length === N) {
            result.push(combine)
            return
        }
        for (let i = 0; i < N; i++) {
            // 剪枝: 用过的元素不能再使用、当前元素等于前一个元素且前一个元素还没有被使用时，不能使用
            if (used[i] || i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
                continue
            }
            used[i] = true
            combine.push(nums[i])
            backTrack([...combine])
            combine.pop()
            used[i] = false
        }
    }
    backTrack([])

    return result
}