package problem0476

// 101 ^ 111 = 010
// 1001 ^ 1111 = 0110
// 只要拿到所有位数都为1的数就好啦
func findComplement(num int) int {
	base := 0
	temp := num
	for temp > 0 {
		temp >>= 1
		base = base<<1 + 1
	}
	return num ^ base
}
