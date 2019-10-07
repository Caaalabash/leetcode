package problem0693

func hasAlternatingBits(n int) bool {
	prev := n & 1
	n >>= 1
	for n > 0 {
		if n&1 == prev {
			return false
		}
		prev = n & 1
		n >>= 1
	}
	return true
}
