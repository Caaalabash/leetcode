package problem0392

// 给定字符串s和t，判断s是否为t的子序列
// 双指针解法
func isSubsequence(s string, t string) bool {
	if len(s) == 0 {
		return true
	}
	j := 0
	for i := 0; i < len(t); i++ {
		if s[j] == t[i] {
			j++
			if j == len(s) {
				return true
			}
		}

	}
	return false
}
