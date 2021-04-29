// 与316重复

function smallestSubsequence(s) {
	// 首先遍历一遍，记录各个字符出现的最后位置
	const letterMap = {}
	for (let i = 0; i < s.length; i++) {
		letterMap[s[i]] = i
	}
	// 然后搞一个单减栈(栈顶到栈底单减)
	const stack = []
	// stack中字符的唯一性
	const stackMap = {}
	for (let i = 0; i < s.length; i++) {
		// 并不是严格的单调栈，如果后面没有这个字符了，就不出栈
		if (!stackMap[s[i]]) {
			while (stack.length && s[i] < stack[stack.length-1] && i < letterMap[stack[stack.length-1]]) {
				stackMap[stack.pop()] = false
			}
			stackMap[s[i]] = true
			stack.push(s[i])
		}
	}
	return stack.join('')
}