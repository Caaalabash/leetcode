package problem441

func arrangeCoins(n int) int {
	if n == 0 {
		return 0
	}
	left, right := 1, n
	for left < right {
		mid := (left + right) >> 1
		if (mid*(mid+1))>>1 < n {
			left = mid + 1
		} else {
			right = mid
		}
	}
	if left*(left+1)>>1 == n {
		return left
	}
	return left - 1
}
