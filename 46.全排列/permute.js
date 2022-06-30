// 空间复杂度 O(n)
// 时间复杂度 O(n*n!)：backTrack的调用次数是O(n!)的，每次需要将当前答案使用 O(n) 的时间复制到答案数组中
function permute(nums) {
    const result = []
    const N = nums.length
    const visit = new Array(N).fill(false)

    const backTrack = (combine) => {
        if (combine.length === N) {
            result.push(combine)
            return
        }
        for (let i = 0; i < N; i++) {
            if (visit[i]) {
                continue
            }
            visit[i] = true
            combine.push(nums[i])
            backTrack([...combine])
            combine.pop()
            visit[i] = false
        }
    }

    backTrack([])

    return result
}