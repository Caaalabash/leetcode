package problem0278

// 由leetcode提供
func isBadVersion(version int) bool {
	return false
}

func firstBadVersion(n int) int {
	left, right := 1, n
	for left < right {
		mid := (left + right) >> 1
		if isBadVersion(mid) {
			right = mid
		} else {
			left = mid + 1
		}
	}
	return left
}
