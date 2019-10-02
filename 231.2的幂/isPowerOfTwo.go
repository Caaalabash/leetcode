package problem0231

// 若 n = 2^x 一定满足如下的条件:
// 1. n二进制最高位为1, 其余所有位为0, 那么n-1二进制最高位为0, 其余所有位为1
// 2. 一定满足 n > 0
func isPowerOfTwo(n int) bool {
	return n > 0 && n&(n-1) == 0
}
