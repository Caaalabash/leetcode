package problem0739

// 递减栈, 模式比较固定, 实际应用的核心在于：每次比较后弹出元素，再针对此元素做处理
func dailyTemperatures(T []int) []int {
	var stack []int

	result := make([]int, len(T))
	for i, v := range T {
		for len(stack) > 0 && T[stack[len(stack)-1]] < v {
			result[stack[len(stack)-1]] = i - stack[len(stack)-1]
			stack = stack[:len(stack)-1]
		}
		stack = append(stack, i)
	}
	return result
}
