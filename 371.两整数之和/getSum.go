package problem0371

// a + b 的问题拆分为 (a 和 b 的无进位结果) + (a 和 b 的进位结果)，从十进制着手 26 + 37拆解为 60 + 3
func getSum(a int, b int) int {
	// 循环此过程，直到进位为 0
	for b != 0 {
		t := (a&b)<<1
		// a和b的无进位结果
		a = a^b
		// a和b的进位结果
		b = t
	}
	return a
}