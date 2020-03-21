package problem0367

// 二分法，虽然题目只限定正整数，但是0也是完全平方数，一并考虑
func isPerfectSquare(num int) bool {
	l, r := 0, num
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
