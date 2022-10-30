// 简单回溯
function letterCasePermutation(s) {
	const result = []
	const n = s.length
	const backTrack = (path, i) => {
		if (i === n) {
			result.push(path)
			return
		}
		if ('a' <= s[i] && s[i] <= 'z') {
			backTrack(path + s[i].toUpperCase(), i + 1)
		} else if ('A' <= s[i] && s[i] <= 'Z') {
			backTrack(path + s[i].toLowerCase(), i + 1)
		}
		backTrack(path + s[i], i + 1)
	}
	backTrack('', 0)
	return result
}