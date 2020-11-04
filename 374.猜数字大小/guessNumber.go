package problem0374

// 由leetcode提供
func guess(int) int {
	return 0
}

// 单纯的二分法
func guessNumber(n int) int {
	left, right := 0, n
	for left < right {
		mid := (left + right) >> 1
		result := guess(mid)
		if result == 0 {
			return mid
		} else if result == 1 {
			left = mid + 1
		} else if result == -1 {
			right = mid
		}
	}
	return left
}
