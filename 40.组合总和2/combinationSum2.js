function combinationSum2(candidates, target) {
    // 排序
    candidates.sort((a, b) => a < b ? -1 : 1)
    const result = []
    const backTrack = (combine, target, index) => {
        if (target < 0) {
            return false
        }
        if (target === 0) {
            result.push(combine)
            return true
        }
        for (let i = index; i < candidates.length; i++) {
            // 剪枝，如果相邻两个元素相等，跳过
            if (i > index && candidates[i] === candidates[i - 1]) {
                continue
            }
            combine.push(candidates[i])
            // 注意这里的引用
            if (!backTrack([...combine], target - candidates[i], i + 1)) {
                break
            }
            combine.pop()
        }
        return true
    }
    backTrack([], target, 0)
    return result
}