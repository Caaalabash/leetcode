package problem0342

// 老实孩子的做法, 依旧是两点：
// 1. 首先是2的幂
// 2. 1出现在奇数位置上
// 0ms 2mb
func isPowerOfFour(num int) bool {
	// 先判断是否为2的幂
	if num > 0 && num&(num-1) == 0 {
		// 如果num-1中1的个数为偶数, 则通过
		if hammingWeight(num-1)&1 == 0 {
			return true
		}
		return false
	}
	return false
}

// 位1的个数
func hammingWeight(num int) int {
	var result int
	for num > 0 {
		num &= num - 1
		result++
	}
	return result
}

// 奇淫巧技
// 0xaaaaaaaa = 10101010101010101010101010101010 (偶数位为1，奇数位为0）
// 0x55555555 = 1010101010101010101010101010101 (偶数位为0，奇数位为1）
// 那么要判断1是否出现在奇数位置上，只需要判断 num & 0xaaaaaaaa == 0即可
// 最简答案
func isPowerOfFour1(num int) bool {
	return num > 0 && num&(num-1) == 0 && num&0xaaaaaaaa == 0
}
