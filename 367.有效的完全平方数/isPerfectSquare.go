package problem0367

func isPerfectSquare(num int) bool {
	l, r := 1, num
	for l < r {
		mid := (l + r) >> 1
		if mid*mid < num {
			l = mid + 1
		} else {
			r = mid
		}
	}
	return l*l == num
}
