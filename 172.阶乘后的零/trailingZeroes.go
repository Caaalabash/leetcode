package problem0172

// 阶乘中2的个数要比5多，因此只考虑5的个数
func trailingZeroes(n int) int {
	result := 0
	for n > 0 {
		result += n / 5
		n /= 5
	}
	return result
}
