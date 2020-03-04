package problem0201

// 给定端点[m, n], 返回此范围内所有数字的按位与结果（包含端点）
// 普通O(n)的做法必定超时，那就要找到一种不断缩小范围的办法
// 核心：如果n比m二进制位数高的话，在不断按位与的过程中"每个二进制位必然都出现锅0，结果必然位为0"

func rangeBitwiseAnd(m int, n int) int {
	move := 0
	for m != n {
		m >>= 1
		n >>= 1
		move++
	}
	return m << move
}
