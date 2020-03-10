package problem0022

// 回溯算法是一种算法是想，递归是一种算法结构，一般回溯法多用递归来实现
func generateParenthesis(n int) []string {
	var (
		result    []string
		backTrack func(path string, left int, right int)
	)
	backTrack = func(path string, left int, right int) {
		if left == 0 && right == 0 {
			if path != "" {
				result = append(result, path)
			}
			return
		}
		// 如果左括号个数大于右括号个数，减枝，因为必定无效
		if left > right {
			return
		}
		if left > 0 {
			backTrack(path+"(", left-1, right)
		}
		if right > 0 {
			backTrack(path+")", left, right-1)
		}

	}
	backTrack("", n, n)
	return result
}
