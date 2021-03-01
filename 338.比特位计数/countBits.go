package problem0338

// 给定一个非负整数 num。对于 0 ≤ i ≤ num 范围中的每个数字 i ，计算其二进制数中的 1 的数目并将它们作为数组返回。
// 需要O(n)的时间复杂度 => 动态规划
// 两个要点：
// 1. 二进制表示中，奇数一定比前面那个偶数多一个1
// 2. 二进制表示中，偶数中1的个数一定和除以2之后的那个数一样多
func countBits(num int) []int {
	result := make([]int, num+1)
	result[0] = 0
	for i := 1; i <= num; i++ {
		if i&1 == 1 {
			result[i] = result[i-1] + 1
		} else {
			result[i] = result[i/2]
		}
	}
	return result
}
