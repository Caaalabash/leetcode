// n个左括号，n个右括号
// 回溯过程中需要保证combine合法：即 left <= right
function generateParenthesis(n) {
	const result = []
	const backTrack = (combine, left, right) => {
		if (left === 0 && right === 0) {
			result.push(combine)
			return
		}
		if (left > right) {
			return
		}
		if (left > 0) {
			backTrack(combine + '(', left - 1, right)
		}
		if (right > 0) {
			backTrack(combine + ')', left, right - 1)
		}
	}
	backTrack('', n, n)
	return result
}