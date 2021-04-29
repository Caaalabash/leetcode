// 去除重复字母
// 给你一个字符串 s ，请你去除字符串中重复的字母，使得每个字母只出现一次。需保证 返回结果的字典序最小（要求不能打乱其他字符的相对位置）。

// 哈希表 + 单调栈
function removeDuplicateLetters(s) {
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