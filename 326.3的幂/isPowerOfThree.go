package problem0326

// 整数限制, 32位整数中3的最大次幂为3^19, 也就是1162261467
func isPowerOfThree(n int) bool {
	return n > 0 && 1162261467%n == 0
}
