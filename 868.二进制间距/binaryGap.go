package problem0868

// 只关心连续的1，无需存储整个数组
// O(logN) O(1)
func binaryGap(n int) int {
	result := 0
	prevOne := -1
	for i := 0; i < 32; i++ {
		if (n>>i)&1 > 0 {
			if prevOne != -1 {
				result = max(result, i-prevOne)
			}
			prevOne = i
		}
	}
	return result
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
