package problem0136

// 异或运算符的性质
// 交换律 p ^ q = q ^ p
// 结合律 p ^ (q ^ r) = (p ^ q) ^ r
// 恒等律 p ^ 0 = p
// 归零律 p ^ p = 0
// 自反: p ^ q ^ q = p
func singleNumber(nums []int) int {
	var result int
	for i := 0; i < len(nums); i++ {
		result ^= nums[i]
	}
	return result
}
