function combinationSum(candidates, target) {
	const result = []
	const N = candidates.length

	const backTrack = (combine, targetSum, index) => {
		if (index === N) {
			return
		}
		if (targetSum === 0) {
			result.push(combine)
			return
		}
		// 不选择当前数
		backTrack(combine, targetSum, index + 1)
		// 选择当前数
		if (targetSum - candidates[index] >= 0) {
			combine.push(candidates[index])
			backTrack([...combine], targetSum - candidates[index], index)
			combine.pop()
		}
	}

	backTrack([], target, 0)

	return result
}