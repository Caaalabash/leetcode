package problem0268

// 依旧是异或运算："对一个数进行两次完全相同的异或运算会得到原来的数"
// 索引 0 1 2
// 数值 0 1 3  --> 缺2, 只需要构造出0^0, 1^1, 3^3即可找到剩下的值
func missingNumber(nums []int) int {
	result := len(nums)
	for i := 0; i < len(nums); i++ {
		result = result ^ i ^ nums[i]
	}
	return result
}
