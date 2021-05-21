package problem0191

// 循环和位移动
func hammingWeight(num uint32) int {
	var result int
	for num != 0 {
		if num&1 == 1 {
			result += 1
		}
		num >>= 1
	}
	return result
}

// 位操作的小技巧: n&(n-1)总是能将n中的最低位变成1, 其他位置保持不变
// n:       10011100
// n-1:     10011011
// n&(n-1): 10011000
// So:
func hammingWeight1(num uint32) int {
	var result int
	for num > 0 {
		num &= num - 1
		result++
	}
	return result
}
