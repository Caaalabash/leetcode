function combine(n, k) {
	const result = []
	const used = new Array(n).fill(false)

	const backTrack = (combine) => {
		if (combine.length === k) {
			result.push(combine)
			return
		}
		for (let i = 1; i <= n; i++) {
			if (used[i - 1]) {
				continue
			}
			// [4, 1] 和 [1, 4]被视为相同，因此如果 i < combine最后一位，continue
			if (combine.length && i < combine[combine.length - 1]) {
				continue
			}
			used[i - 1] = true
			combine.push(i)
			backTrack([...combine])
			combine.pop()
			used[i - 1] = false
		}
	}
	backTrack([])
	return result
}