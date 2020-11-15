package problem0316

// 给你一个字符串 s ，请你去除字符串中重复的字母，使得每个字母只出现一次。需保证 返回结果的字典序最小（要求不能打乱其他字符的相对位置）
// 思路：遇到一个新字符 如果比栈顶小 并且在新字符后面还有和栈顶一样的 就把栈顶的字符抛弃了 => 单调栈
func removeDuplicateLetters(s string) string {
	stack := make([]byte, 0)
	lastSeenMap := make(map[byte]int, 0)
	appearMap := make(map[byte]struct{}, 0)
	for i, b := range s {
		lastSeenMap[byte(b)] = i
	}
	for i, b := range s {
		value := byte(b)
		if _, ok := appearMap[value]; !ok {
			for len(stack) > 0 && value < stack[len(stack)-1] && i < lastSeenMap[stack[len(stack)-1]] {
				delete(appearMap, stack[len(stack)-1])
				stack = stack[:len(stack)-1]
			}
			stack = append(stack, value)
			appearMap[value] = struct{}{}
		}
	}
	return string(stack)
}
