package problem1209

// 记忆计数
func removeDuplicates(s string, k int) string {
	result := []byte(s)
	memory := make([]int, len(s))

	for i := 0; i < len(result); i++ {
		if i == 0 || result[i] != result[i-1] {
			memory[i] = 1
		} else {
			memory[i] = memory[i-1] + 1
			if memory[i] == k {
				result = append(result[:i-k+1], result[i+1:]...)
				i = i - k
			}
		}
	}

	return string(result)
}
