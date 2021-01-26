package problem0485

func findMaxConsecutiveOnes(nums []int) int {
	result := 0
	cur := 0
	for _, val := range nums {
		if val == 1 {
			cur++
		} else {
			result = max(result, cur)
			cur = 0
		}
	}
	return max(result, cur)
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
