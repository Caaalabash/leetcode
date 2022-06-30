const map = {
	2: 'abc',
	3: 'def',
	4: 'ghi',
	5: 'jkl',
	6: 'mno',
	7: 'pqrs',
	8: 'tuv',
	9: 'wxyz',
}

function letterCombinations(digits) {
	if (digits.length === 0) {
		return []
	}
	const result = []
	const backTrack = (combine, index) => {
		if (combine.length === digits.length) {
			result.push(combine)
			return
		}
		const options = map[digits.charAt(index)]
		for (let i = 0; i < options.length; i++) {
			combine += options.charAt(i)
			backTrack(combine, index + 1)
			combine = combine.slice(0, combine.length - 1)
		}
	}
	backTrack('', 0)
	return result
}